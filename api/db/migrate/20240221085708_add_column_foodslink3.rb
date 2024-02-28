class AddColumnFoodslink3 < ActiveRecord::Migration[6.0]
  def up
    add_column :foods, :link_path3, :string
  end
end
