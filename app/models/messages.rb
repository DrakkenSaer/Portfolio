class Messages < ActiveRecord::Base
  validates :email, :subject, :body, presence: true, length: {minimum: 6}
end