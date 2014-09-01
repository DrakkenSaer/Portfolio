class Job < ActiveRecord::Base
  validates :title, :company, :description, presence: true, uniqueness: true, length: {minimum: 6}
end
