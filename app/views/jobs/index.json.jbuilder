json.array!(@jobs) do |job|
  json.(job, :id, :title, :company, :description, :years, :manager, :contact, :skills, :address)
  json.image job.image.url(:medium)
end