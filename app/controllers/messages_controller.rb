class MessagesController < ApplicationController
  before_action :authenticate_user!, except: [:new, :create]

  def index
    @messages = Message.all
  end

  def show
    @message = Message.find(params[:id])
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
    if @message.destroy!
      render nothing: true
    end
  end

  private

  def message_params
    params.require(:message).permit(:email, :subject, :body)
  end

end