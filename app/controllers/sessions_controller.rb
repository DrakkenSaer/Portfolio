class SessionsController < ApplicationController

  def new
    if signed_in?
      flash.now[:notice] = 'You are already signed in!'
    end
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_to root_path
    else
      flash.now[:danger] = 'Invalid username/password combination'
      render 'new'
    end
  end

   def destroy
    sign_out
    redirect_to root_url
  end

end