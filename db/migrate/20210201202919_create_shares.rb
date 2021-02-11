class CreateShares < ActiveRecord::Migration[6.1]
  def change
    create_table :shares do |t|
      t.string :company_title
      t.string :ticker
      t.string :country

      t.timestamps
    end

    add_index :shares, :ticker, unique: true
  end
end
