class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :food_name
      t.integer :rate
      t.string :path_name

      t.timestamps
    end
  end
end
