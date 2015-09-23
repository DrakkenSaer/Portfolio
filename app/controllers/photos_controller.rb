class PhotosController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  
  def index
    @photos = Photo.all
  end
    
  def new
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