class PeoplesController < ApplicationController
  def index
    @peoples = People.all
  end

  def new
    @people = People.new
    @office = office_atr
    @security = security_atr
  end

  def create
    @people = People.new(people_params)

    respond_to do |format|
      if @people.save
        format.html { redirect_to root_path, notice: 'Um VIP ' + @people.name.to_s + ' foi criado com sucesso!' }
      else
        format.html { render :new }
        format.json { render json: @people.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @people = set_people
    @office = office_atr
    @security = security_atr
  end

  def update
    @people = set_people
    respond_to do |format|
      if @people.update(people_params)
        format.html { redirect_to root_path(@people), notice: 'VIP  ' + @people.name.to_s + ' foi atualizado com sucesso!' }
        format.json { render :show, status: :ok, location: @people }
      else
        format.html { render :edit }
        format.json { render json: @people.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @people = set_people
    name = @people.name
    @people.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Um VIP ' + @people.name.to_s + ' foi deletado com sucesso!' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_people
      @people = People.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def people_params
      params.require(:people).permit(:name, :cpf, :cellPhone, :borned, :office, :security)
    end

    def office_atr
      ["Governador","Presidente","General", "Outros"]
    end

    def security_atr
      {"Aproximada" => 1, "Combio" => 2, "Batedor" => 3, "Helicóptero" => 4, "F.E." => 5}
    end
end
