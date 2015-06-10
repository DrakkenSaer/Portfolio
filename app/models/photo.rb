class Photo < ActiveRecord::Base
  before_save :falsify_all_primary

  validates :title, presence: true, length: {minimum: 6}

  has_attached_file :image, styles: { small: "300x300>", medium: "400x400>", large: "900x900>" }, default_url: "/images/:style/missing.png"
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates_attachment :image, presence: true, content_type: { content_type: ["image/jpeg", "image/jpg", "image/png", "image/gif",  "image/bmp"] }, size: { less_than: 5.megabytes }
  
  private
  def falsify_all_primary
    if self.is_primary == true
      self.class.where('id != ?', self.id).update_all(is_primary: "false"); 
    end
  end

end
