class Project < ActiveRecord::Base
  validates :title, :link, :description, presence: true, uniqueness: true
  
  has_attached_file :image, styles: { medium: "300x300>", large: "500x500>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates_attachment :image, presence: true, content_type: { content_type: ["image/jpeg", "image/jpg", "image/png", "image/gif"] }, size: { less_than: 5.megabytes }

end
