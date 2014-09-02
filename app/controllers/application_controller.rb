class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper

  def empty?(object)
    unless signed_in? 
      if object.empty?
        redirect_to root_path
      end
    end
  end
end
