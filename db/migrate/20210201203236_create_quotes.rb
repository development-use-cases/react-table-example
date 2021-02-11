class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.references :share, null: false, foreign_key: true
      t.integer :cost, null: false
      t.date :date

      t.timestamps
    end
  end
end
