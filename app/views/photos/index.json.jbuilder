json.array!(@photos) do |photo|
  json.(photo, :id, :title, :photographer, :is_primary)
  json.image photo.image.url(:medium)
end