json.extract! @photo, :id, :title
json.image @photo.image.url(:medium)

json.extract! @project, :id, :title
json.image @project.image.url(:medium)