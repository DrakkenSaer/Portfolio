json.array!(@projects) do |project|
  json.(project, :id, :title, :link, :description, :is_primary)
  json.image_original project.image.url(:original)
  json.image_large project.image.url(:large)
  json.image_medium project.image.url(:medium)
  json.image_small project.image.url(:small)
end