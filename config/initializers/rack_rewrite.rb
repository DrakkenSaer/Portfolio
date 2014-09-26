Portfolio::Application.config.middleware.insert_before(Rack::Runtime, Rack::Rewrite) do
  r301 %r{.*}, 'http://www.workinprogress.com$&', :if => Proc.new {|rack_env|
    rack_env['SERVER_NAME'] == 'workinprogress.com'
  }
end