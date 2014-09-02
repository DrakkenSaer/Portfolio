class JobsController < ApplicationController
  before_action :signed_in_user, except: [:show, :index]
  
  def index
    @jobs = Job.all
    empty?(@jobs)
  end
  
  def show
    @job = Job.find(params[:id])
    empty?(@job)
  end
  
  def new
    @job = Job.new
  end
  
  def create
    @job = Job.new(job_params)
    if @job.save
      flash[:success] = "Job created!"
      redirect_to @job
    else
      render 'new'
    end
  end
  
  def edit
    @job = Job.find(params[:id])
  end
  
  def update
    @job = Job.find(params[:id])
    if @job.update!(job_params)
      flash[:success] = "Job saved!"
      redirect_to @job
    else
      render 'edit'
    end
  end
  
  def destroy
    @job = Job.(params[:id])
    @job.destroy!
  end
  
  private
  
  def job_params
    params.require(:job).permit(:title, :company, :years, :description, :manager, :contact)
  end

end
