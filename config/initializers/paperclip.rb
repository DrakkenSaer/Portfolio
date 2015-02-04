# use amazon cloud services for file storage in production mode

if Rails.env.production?
  Paperclip::Attachment.default_options[:url] = ':s3_domain_url'
  Paperclip::Attachment.default_options[:path] = '/:class/:attachment/:id_partition/:style/:filename'
  Paperclip::Attachment.default_options[:storage] = :s3
  Paperclip::Attachment.default_options[:s3_protocol] = 'https'
  Paperclip::Attachment.default_options[:s3_credentials] =
    { :bucket => ENV['AWS_BUCKET'],
      :access_key_id => ENV['AWS_ACCESS_ID'],
      :secret_access_key => ENV['AWS_SECRET_ID'] }
end