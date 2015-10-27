class ResumeController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]

  def index
  end
  
  def show
    @jobs = Job.last(3)
    @resume = Resume.first
  end

  def new
  end

  def create
    @resume = Resume.new(resume_params)
    if @resume.save
      render json: @resume, status: :created
    else
      render json: @resume.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @resume = Resume.find(params[:id])
    if @resume.update(resume_params)
      render json: @resume.attributes.merge(schools: @resume.schools)
    else
      render json: @resume.errors, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private

  def resume_params
    params.require(:resume).permit(:header, :link, :address, :phone, :email, :position, :qualifications, :skills, schools_attributes: [:resume_id, :id, :title, :years, :description])
  end

end