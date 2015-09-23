json.array!(@photos) do |photo|
  json.(photo, :id, :title, :photographer, :is_primary)
  json.image_original photo.image.url(:original)
  json.image_large photo.image.url(:large)
  json.image_medium photo.image.url(:medium)
  json.image_small photo.image.url(:small)
end