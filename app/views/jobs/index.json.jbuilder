json.array!(@jobs) do |job|
  json.(job, :id, :title, :company, :description, :years, :manager, :contact, :skills, :address)
  json.image_original job.image.url(:original)
  json.image_large job.image.url(:large)
  json.image_medium job.image.url(:medium)
  json.image_small job.image.url(:small)
  json.references job.references, :id, :reference
end