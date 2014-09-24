class MessagesController < ApplicationController
  before_action :signed_in_user, except: [:new, :create]

  def index
    @messages = Messages.all
  end
    
  def new
    @message = Messages.new
  end
  
  def create
    @message = Messages.new(message_params)
    if @message.save
      flash[:success] = "Message sent!"
      redirect_to contact_path
    else
      render 'new'
    end
  end
  
  def destroy
    @message = Messages.find(params[:id])
    @message.destroy!
    flash[:success] = "Message deleted!"
    redirect_to messages_path
  end
  
  private
  
  def message_params
    params.require(:message).permit(:email, :subject, :body)
  end

end