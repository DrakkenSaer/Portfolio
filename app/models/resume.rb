class Resume < ActiveRecord::Base
  has_many :schools, dependent: :destroy
  accepts_nested_attributes_for :schools
  validate :only_one
  validates :header, presence: true

  def only_one
    if Resume.all.length > 0
      errors.add(:Resume, "cannot create more than one entry of this data model")
    end
  end
end