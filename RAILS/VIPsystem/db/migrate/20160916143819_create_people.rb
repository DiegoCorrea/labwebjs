class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :cpf
      t.string :cellPhone
      t.string :borned
      t.string :office
      t.string :security

      t.timestamps null: false
    end
  end
end
