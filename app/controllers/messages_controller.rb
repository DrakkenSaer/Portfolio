class MessagesController < ApplicationController
  before_action :signed_in_user, except: [:new, :create]

  def index
    @messages = Message.all
  end
    
  def new
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)
    if @message.save
      flash[:success] = "Message sent!"
      redirect_to contact_path
    else
      render 'new'
    end
  end
  
  def destroy
    @message = Message.find(params[:id])
    @message.destroy!
    flash[:success] = "Message deleted!"
    redirect_to messages_path
  end
  
  private
  
  def message_params
    params.require(:message).permit(:email, :subject, :body)
  end

end