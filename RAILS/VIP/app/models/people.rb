class People < ApplicationRecord
	validates :name, :cpf, :borned, :office, presence: true
end
