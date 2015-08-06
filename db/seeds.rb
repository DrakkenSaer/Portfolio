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