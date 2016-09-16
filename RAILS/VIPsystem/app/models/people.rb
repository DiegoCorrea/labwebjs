class People < ActiveRecord::Base
	validates :name, :cpf, :borned, :office, presence: true

	before_save do
		self.security.gsub!(/[\[\]\"]/,"") if attribute_present?("security")
	end
end
