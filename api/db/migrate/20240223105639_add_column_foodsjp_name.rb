class AddColumnFoodsjpName < ActiveRecord::Migration[6.0]
  def up
    add_column :foods, :jp_name, :string
  end
end
