class CreateResumes < ActiveRecord::Migration
  def change
    create_table :resumes do |t|
      t.string :header
      t.string :link
      t.text :address
      t.string :phone
      t.string :email
      t.string :position
      t.text :qualifications
      t.text :skills

      t.timestamps null: false
    end
  end
end
