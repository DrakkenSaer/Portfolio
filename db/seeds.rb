# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: "master@master.com", password: "master123", password_confirmation: "master123", confirmed_at: Time.zone.now)

Job.create(title: "Example Job 1", company: "Example Corporation 1", years: "2000 - 2010", description: "This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job.", manager: "Example Manager 1", contact: "999-999-9999", address: "123 Example Lane", skills: "Fire, wood, skills, ownage, promgramming, etc", image_file_name: "pooop.jpg", image_content_type: "image/jpg", image_file_size: "1000")
Job.create(title: "Example Job 2", company: "Example Corporation 2", years: "2000 - Present", description: "This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. Itwassohard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.", manager: "Example Manager 2", contact: "example@hotmail.com", address: "123 Example Lane", skills: "Fire, wood, skills, ownage, promgramming, etc", image_file_name: "dong1.jpg", image_content_type: "image/jpg", image_file_size: "2000")
Job.create(title: "Example Job 3", company: "Example Corporation 3", years: "2000 - 2010", description: "This was easy.", manager: "Example Manager 3", contact: "easy@works.com", address: "123 Why Ave", skills: "You face", image_file_name: "face1.jpg", image_content_type: "image/jpg", image_file_size: "1500")


jobs = Job.all

5.times do
  reference = "Example - example@hotmail.com"
  jobs.each { |job| job.references.create!(reference: reference) }
end

Project.create(title: "Example Project 1", link: "Google.com", description: "This was easy.", image_file_name: "project1.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Project.create(title: "Example Project 2", link: "Mozilla.com", description: "This was intermediate.", image_file_name: "project2.jpg", image_content_type: "image/jpg", image_file_size: "500")
Project.create(title: "Example Project 3", link: "Bing.com", description: "This was hard.", image_file_name: "project3.jpg", image_content_type: "image/jpg", image_file_size: "2000")

Photo.create(title: "Example Photo 1", photographer: "Drakken Saer", image_file_name: "photo1.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Photo.create(title: "Example Photo 2", photographer: "Drakken Saer", image_file_name: "photo2.jpg", image_content_type: "image/jpg", image_file_size: "500")
Photo.create(title: "Example Photo 3", photographer: "Drakken Saer", image_file_name: "photo3.jpg", image_content_type: "image/jpg", image_file_size: "2000")


4.times do
  email = "example@saerdesigns.com"
  subject = "I'd like to hire you!"
  body = "Let's discuss the details further."
  Message.create(email: email, subject: subject, body: body)
end

Message.create(email: "fan@fandom.com", subject: "Just a fan!", body: "I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding!")