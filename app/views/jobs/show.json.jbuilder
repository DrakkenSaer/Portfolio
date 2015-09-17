json.extract! @job, :id, :title, :company, :description, :years, :manager, :contact, :skills, :address
json.image @job.image.url(:large)
json.references @job.references, :id, :reference