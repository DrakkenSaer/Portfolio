class MessagesController < ApplicationController
  before_action :authenticate_user!, except: [:new, :create]
  respond_to 'json'


  def index
    @messages = Message.all
  end
    
  def new
  end
  
  def create
    @message = Message.new(message_params)
    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
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