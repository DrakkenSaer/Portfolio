class JobsController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @jobs = Job.all
  end

  def show
  end

  def new
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render json: @job.attributes.merge(
        image_original: @job.image.url(:original),
        image_large: @job.image.url(:large),
        image_medium: @job.image.url(:medium),
        image_small: @job.image.url(:small),
        references: @job.references
        ), status: :created
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @job = Job.find(params[:id])
    if @job.update(job_params)
      render json: @job.attributes.merge(
        image_original: @job.image.url(:original),
        image_large: @job.image.url(:large),
        image_medium: @job.image.url(:medium),
        image_small: @job.image.url(:small),
        references: @job.references
        )
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @job = Job.find(params[:id])
    @job.image = nil
    if @job.destroy!
      render nothing: true
    end
  end

  private

  def job_params
    params.require(:job).permit(:title, :company, :years, :description, :manager, :contact, :skills, :address, :image, references_attributes: [:job_id, :id, :reference])
  end

end