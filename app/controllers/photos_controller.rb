class PhotosController < ApplicationController
  before_action :signed_in_user, except: [:show, :index]
  
  def index
    @photos = Photo.order(:id).paginate(:page => params[:page])
    if !signed_in? && @photos.empty?
      redirect_to root_path
    end
  end
    
  def new
    @photo = Photo.new
  end
  
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      flash[:success] = "Photo successfully uploaded!"
      redirect_to photos_path
    else
      render 'new'
    end
  end
  
  def edit
    @photo = Photo.find(params[:id])
  end
  
  def update
    @photo = Photo.find(params[:id])
    if @photo.update!(photo_params)
      flash[:success] = "Photo updated!"
      redirect_to photos_path
    else
      render 'edit'
    end
  end
  
  def destroy
    @photo = Photo.find(params[:id])
    @photo.image = nil
    @photo.destroy!
    flash[:success] = "Photo deleted!"
    redirect_to photos_path
  end
  
  private
  
  def photo_params
    params.require(:photo).permit(:title, :photographer, :image, :is_primary)
  end
  
end