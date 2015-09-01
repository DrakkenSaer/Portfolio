json.extract! @job, :id, :title, :company, :description, :years, :manager, :contact, :skills, :address
json.image @job.image.url(:large)
json.references @references.collect{|x| x.reference}