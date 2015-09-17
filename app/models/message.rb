class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      record.errors[attribute] << (options[:message] || "format must be valid (example@example.com).")
    end
  end
end

class Message < ActiveRecord::Base
  validates :email, :subject, :body, presence: true, length: {minimum: 6}
  validates :email, :subject, length: {maximum: 50}
  validates :email, email: true
end