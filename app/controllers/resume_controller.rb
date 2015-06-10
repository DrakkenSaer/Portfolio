class ResumeController < ApplicationController
  #leave resume in controller for future development
  def index
    @jobs = Job.last(3)
  end

end