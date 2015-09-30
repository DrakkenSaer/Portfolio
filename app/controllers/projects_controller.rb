class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  
  def index
    @projects = Project.all
  end
  
  def show
  end
  
  def new
  end
  
  def create
    @project = Project.new(project_params)
    if @project.save!
      render json: @project.attributes.merge(image_medium: @project.image.url(:medium)), status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end
  
  def edit
  end
  
  def update
    @project = Project.find(params[:id])
    if @project.update!(project_params)
      render json: @project.attributes.merge(image_large: @project.image.url(:large))
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    @project = Project.find(params[:id])
    @project.image = nil
    if @project.destroy!
      render nothing: true
    end
  end
  
  private
  
    def project_params
      params.require(:project).permit(:title, :description, :link, :image, :is_primary)
    end

end