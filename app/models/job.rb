class Job < ActiveRecord::Base
  validates :title, :company, :description, presence: true, uniqueness: true, length: {minimum: 6}

  has_attached_file :image, styles: { small: "300x300>", medium: "500x500>", large: "700x700>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates_attachment :image, presence: true, content_type: { content_type: ["image/jpeg", "image/jpg", "image/png", "image/gif"] }, size: { less_than: 5.megabytes }

end