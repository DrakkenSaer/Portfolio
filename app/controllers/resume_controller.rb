class ResumeController < ApplicationController

  def index
    @jobs = Job.all.limit(3)
  end

end