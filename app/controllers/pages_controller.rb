class PagesController < ApplicationController

  def home
    @jobs = Job.last(3)
  end
  
  def about
  end
  
  def contact
  end

  def portfolio
    Photo.find_by_is_primary(true).nil? ? @photo = Photo.last : @photo = Photo.find_by_is_primary(true)
    Project.find_by_is_primary(true).nil? ? @project = Project.last : @project = Project.find_by_is_primary(true)
    if @photo.nil? && !@project.nil? && !signed_in?
      redirect_to projects_path
    elsif !@photo.nil? && @project.nil? && !signed_in?
      redirect_to photos_path
    end
  end
  
  def resume
    @jobs = Job.last(3)
  end
  
end