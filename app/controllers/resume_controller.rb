class ResumeController < ApplicationController

  def index
    @jobs = Job.last(3)
    @resume = Resume.first
  end

end