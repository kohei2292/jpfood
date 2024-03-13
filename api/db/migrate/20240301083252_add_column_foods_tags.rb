class AddColumnFoodsTags < ActiveRecord::Migration[6.0]
  def up
    add_column :foods, :tags, :string
  end
end
