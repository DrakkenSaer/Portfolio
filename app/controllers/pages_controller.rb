class PagesController < ApplicationController

  def home
    @jobs = Job.last(3)
  end
  
  def about
  end
  
  def contact
  end

  def portfolio
  end
  
  def resume
    @jobs = Job.last(3)
  end
  
  def login
  end
  
end