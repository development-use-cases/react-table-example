# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  { ticker: 'AAPL', company_title: 'Apple', country: 'USA' },
  { ticker: 'AMD', company_title: 'AMD', country: 'USA' },
  { ticker: 'BO', company_title: 'Boening', country: 'USA' },
  { ticker: 'BABA', company_title: 'Alibaba', country: 'China' },
  { ticker: 'COKE', company_title: 'Coca-Cola', country: 'USA' },
  { ticker: 'F', company_title: 'Ford Motor', country: 'USA' },
  { ticker: 'FB', company_title: 'Facebook', country: 'USA' },
  { ticker: 'GOOGL', company_title: 'Google', country: 'USA' },
  { ticker: 'INTC', company_title: 'Intel', country: 'USA' },
  { ticker: 'MRNA', company_title: 'Moderna', country: 'USA' },
  { ticker: 'PFE', company_title: 'Pfizer', country: 'USA' },
  { ticker: 'TSLA', company_title: 'Tesla Motors', country: 'USA' },
  { ticker: 'YNDX', company_title: 'Yandex', country: 'Russia' }
].each { |share_attributes| Share.create(share_attributes) }

{
  '2020-02-01' => {
    'AAPL' => 134,
    'AMD' => 87,
    'BA' => 196,
    'BABA' => 254,
    'COKE' => 269,
    'F' => 10,
    'FB' => 262,
    'GOOGL' => 1893,
    'INTC' => 56,
    'MRNA' => 157,
    'PFE' => 35,
    'TSLA' => 839,
    'YNDX' => 63
  }
}.each do |date, quotes|
  quotes.each do |ticker, cost|
    Quote.create(share: Share.find_by(ticker: ticker), cost: cost, date: date)
  end
end
