class ResumeController < ApplicationController

  def index
    @jobs = Job.last(3)
  end

end