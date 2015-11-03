# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: "master@master.com", password: "master123", password_confirmation: "master123", confirmed_at: Time.zone.now)

Job.create(title: "Example Job 1", company: "Example Corporation 1", years: "2000 - 2010", description: "This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. This was an example job.", manager: "Example Manager 1", contact: "999-999-9999", address: "123 Example Lane", skills: "Fire, wood, skills, ownage, promgramming, etc", image_file_name: "picture1.jpg", image_content_type: "image/jpg", image_file_size: "1000")
Job.create(title: "Example Job 2", company: "Example Corporation 2", years: "2000 - Present", description: "This was an example job. This was an example job. This was an example job. This was an example job. This was an example job. Itwassohard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.Itwashard.", manager: "Example Manager 2", contact: "example@hotmail.com", address: "123 Example Lane", skills: "Fire, wood, skills, ownage, promgramming, etc", image_file_name: "picture2.jpg", image_content_type: "image/jpg", image_file_size: "2000")
Job.create(title: "Example Job 3", company: "Example Corporation 3", years: "2000 - 2010", description: "This was easy.", manager: "Example Manager 3", contact: "easy@works.com", address: "123 Why Ave", skills: "You face", image_file_name: "picture3.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Job.create(title: "Example Job 4", company: "Example Corporation 4", description: "This was okay.", image_file_name: "companylogo1.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Job.create(title: "Tier 2 MacOS IT Support Engineer - Apple", company: "Xerox Inc.", years: "2011 - 2013", description: "This position required advanced knowledge of MacOS (up to 10.8). During this position I fixed MacOS computers (hardware and software). Light use was made of the native Unix-based CLI within the system (mostly for bash scripts), as well as the systems' Verbose mode upon bootup, which was perhaps more heavily used.", image_file_name: "companylogo2.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Job.create(title: "IT Support Engineer - Answer Desk", company: "Convergys", years: "01/23/2013 - Present", description: "While in this position I did chat support for mobile devices (via contract through Convergys) running one of the largest mobile platform OS systems on the market. My primary role was fixing NT Kernel based mobile devices; This included apps, system errors, feature implementations, network connectivity, mail server issues, and user accessibility concerns. While this position was fairly straightforward, I did learn some pretty interesting things about some of the top mobile devices on the market.", image_file_name: "companylogo3.jpg", image_content_type: "image/jpg", image_file_size: "1500")

jobs = Job.all

5.times do
  reference = "Example - example@hotmail.com"
  jobs.each { |job| job.references.create!(reference: reference) }
end

Project.create(title: "Example Project 1", link: "Google.com", description: "This was easy.", image_file_name: "project1.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Project.create(title: "Example Project 2", link: "Mozilla.com", description: "This was intermediate.", image_file_name: "project2.jpg", image_content_type: "image/jpg", image_file_size: "500")
Project.create(title: "Example Project 3", link: "Bing.com", description: "This was hard.", image_file_name: "project3.jpg", image_content_type: "image/jpg", image_file_size: "2000")
Project.create(title: "Example Project 4", link: "Facebook.com", description: "This is Facebook.", image_file_name: "project4.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Project.create(title: "Example Project 5", link: "Myspace.com", description: "This is Myspace.", image_file_name: "project5.jpg", image_content_type: "image/jpg", image_file_size: "500")
Project.create(title: "Example Project 6", link: "Ask.com", description: "This is Ask.com.", image_file_name: "project6.jpg", image_content_type: "image/jpg", image_file_size: "2000")

Photo.create(title: "Example Photo 1", photographer: "Drakken Saer", image_file_name: "photo1.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Photo.create(title: "Example Photo 2", photographer: "Drakken Saer", image_file_name: "photo2.jpg", image_content_type: "image/jpg", image_file_size: "500")
Photo.create(title: "Example Photo 3", photographer: "Drakken Saer", image_file_name: "photo3.jpg", image_content_type: "image/jpg", image_file_size: "2000")
Photo.create(title: "Example Photo 4", photographer: "Drakken Saer", image_file_name: "photo4.jpg", image_content_type: "image/jpg", image_file_size: "1500")
Photo.create(title: "Example Photo 5", photographer: "Drakken Saer", image_file_name: "photo5.jpg", image_content_type: "image/jpg", image_file_size: "500")
Photo.create(title: "Example Photo 6", photographer: "Drakken Saer", image_file_name: "photo6.jpg", image_content_type: "image/jpg", image_file_size: "2000")


4.times do
  email = "example@saerdesigns.com"
  subject = "I'd like to hire you!"
  body = "Let's discuss the details further."
  Message.create!(email: email, subject: subject, body: body)
end

Message.create(email: "fan@fandom.com", subject: "Just a fan!", body: "I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding, I'm just a huge fan of your coding!")

Resume.create(header: "Ian (Drakken or Adela) Coutu", link: "www.saerdesigns.com", address: "26180 SW CANYON CREEK RD; APT 104; WILSONVILLE, OR; 97070", phone: "678-439-8431", email: "shadowdrakkeen@gmail.com", position: "Web Developer / Designer (Ruby on Rails & AngularJS)", qualifications: "6+ years experience with web technologies; Solid organizational and planning skills; Knowledge of SEO tactics and practices; Experience with UI & design; Knowledge of MVC implementations; Knowledge of RESTful software architecture", skills: "Ruby on Rails, AngularJS, Heroku, Git, AJAX, jQuery, Javascript, CSS3, HTML5, SQL deployment, UNIX, Bootstrap, Ruby, PHP, MySQL, LESS CSS, SASS, Angular JS, PostgreSQL, WordPress, Windows OS, MacOS, Linux, LivePerson Administration, Windows Phone OS, Customer Service, Android OS, Nitrous.IO")

Resume.first.schools.create!(title: "Kennesaw State University", years: "2010-2011", description: "Completed non-degree course in philosophy and computer theory")