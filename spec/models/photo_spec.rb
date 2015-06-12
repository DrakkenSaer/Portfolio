require 'rails_helper'

RSpec.describe Photo, type: :model do
  context "title has less than six characters" do
    photo = Photo.new(title: "", photographer: "", image_file_name: "example.jpg", image_content_type: "image/jpg", image_file_size: "1000")
    it "should require a 6 character title" do
      photo.title = "one"
      
      expect{photo.create}.to raise_error 
    end
    it "should be present" do
      expect{photo.create}.to raise_error 
    end
  end
end
