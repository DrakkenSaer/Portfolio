class AddIsPrimaryToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :is_primary, :boolean, default: false
  end
end
