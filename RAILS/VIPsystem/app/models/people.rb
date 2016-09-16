class People < ActiveRecord::Base
	validates :name, :cpf, :borned, :office, presence: true
end
