json.array!(@projects) do |project|
  json.(project, :id, :title, :link, :description, :is_primary)
  json.image project.image.url(:medium)
end