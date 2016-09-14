class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :cpf
      t.string :cellPhone
      t.string :borned
      t.string :office
      t.string :security

      t.timestamps
    end
  end
end
