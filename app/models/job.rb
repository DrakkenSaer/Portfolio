class Job < ActiveRecord::Base
  has_many :references, dependent: :destroy
  accepts_nested_attributes_for :references, limit: 5
  
  validates :title, :company, :description, presence: true, length: {minimum: 6}

  has_attached_file :image, 
  styles: { small: "300x300>", medium: "400x400>", large: "500x500>" }, 
  default_url: "/images/paperclip/:style/missing.png"

  validates_attachment :image, presence: true, 
  content_type: { content_type: /\Aimage\/.*\Z/ }, 
  size: { less_than: 5.megabytes }
end