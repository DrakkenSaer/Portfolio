json.array!(@jobs) do |job|
  json.(job, :id, :title, :company)
  json.image job.image.url(:medium)
end