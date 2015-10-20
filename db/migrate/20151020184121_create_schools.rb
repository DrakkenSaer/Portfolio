class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|
      t.string :title
      t.string :years
      t.text :description
      t.references :resume, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
