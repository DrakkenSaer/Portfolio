class Resume < ActiveRecord::Base
  has_many :schools, dependent: :destroy
end