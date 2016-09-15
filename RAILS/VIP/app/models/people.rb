class People < ApplicationRecord
	validates :name, :cpf, :borned, presence: true
end
