class ProjectsController < ApplicationController
  before_action :signed_in_user, except: [:show, :index]
  
  def index
    @projects = Project.all
  end
  
  def show
    @project = Project.find(params[:id])
  end
  
  def new
    @project = Project.new
  end
  
  def create
    @project = Project.new(project_params)
    if @project.save
      flash[:success] = "Project created!"
      redirect_to @project
    else
      render 'new'
    end
  end
  
  def edit
    @project = Project.find(params[:id])
  end
  
  def update
    @project = Project.find(params[:id])
    if @project.update!(project_params)
      flash[:success] = "Project saved!"
      redirect_to @project
    else
      render 'edit'
    end
  end
  
  def destroy
    @project = Project.find(params[:id])
    @project.destroy!
    flash[:success] = "Project destroyed!"
    redirect_to projects_path
  end
  
  private
  
    def project_params
      params.require(:project).permit(:title, :description, :link, :image)
    end

end