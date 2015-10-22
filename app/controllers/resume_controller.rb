class ResumeController < ApplicationController

  def index
    @jobs = Job.last(3)
    @resume = Resume.first
  end
  
  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
    @resume = Resume.find(params[:id])
    if @resume.update(resume_params)
      render nothing: true
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