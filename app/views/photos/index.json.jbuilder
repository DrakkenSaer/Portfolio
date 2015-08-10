json.array!(@photos) do |photo|
  json.(photo, :id, :title)
end