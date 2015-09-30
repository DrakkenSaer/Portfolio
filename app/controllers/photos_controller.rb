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
      render json: @photo.attributes.merge(
        image_original: @photo.image.url(:original),
        image_large: @photo.image.url(:large),
        image_medium: @photo.image.url(:medium),
        image_small: @photo.image.url(:small),
        ), status: :created
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end
  
  def edit
  end
  
  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render json: @photo.attributes.merge(
        image_original: @photo.image.url(:original),
        image_large: @photo.image.url(:large),
        image_medium: @photo.image.url(:medium),
        image_small: @photo.image.url(:small),
        )
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    @photo = Photo.find(params[:id])
    @photo.image = nil
    if @photo.destroy!
      render nothing: true
    end
  end
  
  private
  
  def photo_params
    params.require(:photo).permit(:title, :photographer, :image, :is_primary)
  end
  
end