class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :quantity
      t.string :amount
      t.string :total

      t.timestamps
    end
  end
end
