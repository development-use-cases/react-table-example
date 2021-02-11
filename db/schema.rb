# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_01_203236) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "quotes", force: :cascade do |t|
    t.bigint "share_id", null: false
    t.integer "cost", null: false
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["share_id"], name: "index_quotes_on_share_id"
  end

  create_table "shares", force: :cascade do |t|
    t.string "company_title"
    t.string "ticker"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ticker"], name: "index_shares_on_ticker", unique: true
  end

  add_foreign_key "quotes", "shares"
end
