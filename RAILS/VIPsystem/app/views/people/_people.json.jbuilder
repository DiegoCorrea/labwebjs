json.extract! people, :id, :name, :cpf, :cellPhone, :borned, :office, :security, :created_at, :updated_at
json.url people_url(people, format: :json)