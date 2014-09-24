class PagesController < ApplicationController

  def home
    @jobs = Job.all.limit(3)
  end
  
  def about
  end
  
  def contact
  end
  
end
