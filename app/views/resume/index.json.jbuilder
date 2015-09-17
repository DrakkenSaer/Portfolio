json.array!(@jobs) do |job|
  json.(job, :id, :title, :company, :description, :years)
  json.references job.references, :id, :reference
end