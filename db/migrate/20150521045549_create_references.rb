class CreateReferences < ActiveRecord::Migration
  def change
    create_table :references do |t|
      t.string :reference
      t.belongs_to :job, index: true

      t.timestamps
    end
  end
end
