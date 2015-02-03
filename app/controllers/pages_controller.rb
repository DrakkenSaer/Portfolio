class PagesController < ApplicationController

  def home
    @jobs = Job.first(3)
  end
  
  def about
  end
  
  def contact
  end

  def portfolio
    @photos = Photo.last(1)
    @projects = Project.last(1)
    if @photos.empty? && !@projects.empty? && !signed_in?
      redirect_to projects_path
    elsif !@photos.empty? && @projects.empty? && !signed_in?
      redirect_to photos_path
    end
  end
  
end