json.extract! @resume, :header, :link, :address, :phone, :email, :position, :qualifications, :skills
json.schools @resume.schools, :id, :title, :years, :description