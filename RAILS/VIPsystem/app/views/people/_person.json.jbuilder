json.extract! person, :id, :name, :cpf, :cellPhone, :borned, :office, :security, :created_at, :updated_at
json.url person_url(person, format: :json)