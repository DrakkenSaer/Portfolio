class JobsController < ApplicationController
  before_action :signed_in_user, except: [:show, :index]
  
  def index
    @jobs = Job.all
  end
  
  def show
    @job = Job.find(params[:id])
    @references = @job.references.order(:id)
  end
  
  def new
    @job = Job.new
    5.times { @job.references.build }
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
    @references = @job.references.order(:id)
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
    @job = Job.find(params[:id])
    @job.image = nil
    @job.destroy!
    flash[:success] = "Job destroyed!"
    redirect_to jobs_path
  end
  
  private
  
  def job_params
    params.require(:job).permit(:title, :company, :years, :description, :manager, :contact, :skills, :address, :image, references_attributes: [:job_id, :id, :reference])
  end

end