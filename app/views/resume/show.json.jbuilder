unless @resume.nil?
  json.extract! @resume, :id, :header, :link, :address, :phone, :email, :position, :qualifications, :skills
  json.schools @resume.schools, :id, :title, :years, :description
end