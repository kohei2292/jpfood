class AddColumnFoods < ActiveRecord::Migration[6.0]
  def up
    add_column :foods, :call_name, :string
    add_column :foods, :link_path1, :string
    add_column :foods, :link_path2, :string
  end
end
