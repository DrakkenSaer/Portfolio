# use amazon cloud services for file storage in production mode

if Rails.env.production?
  Paperclip::Attachment.default_options.merge!({
    url: ':s3_domain_url',
    path: '/:class/:attachment/:id_partition/:style/:filename',
    storage: :s3,
    s3_protocol: 'https',
    s3_credentials:
    { :bucket => ENV['AWS_BUCKET'],
      :access_key_id => ENV['AWS_ACCESS_ID'],
      :secret_access_key => ENV['AWS_SECRET_ID'] }
    })
end