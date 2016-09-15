class PeoplesController < ApplicationController
  def index
  	@peoples = People.all
  end

  def new
  	@people = People.new
  end

  def create
  	@people = People.new(people_params)
  end

  def edit
  	@people = People.find(params[:id])
  end

  
end
