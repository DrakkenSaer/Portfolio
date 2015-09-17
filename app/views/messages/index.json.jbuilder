json.array!(@messages) do |message|
  json.(message, :id, :email, :subject, :body, :created_at)
end