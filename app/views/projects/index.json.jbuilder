json.array!(@projects) do |project|
  json.(project, :id, :title)
end