class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.text :description
      t.string :years
      t.string :manager
      t.string :contact
      t.string :skills
      t.string :address
      
      t.timestamps
    end
  end
end
