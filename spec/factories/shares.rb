FactoryBot.define do
  factory :share do
    company_title { Faker::Company.name }
    ticker { company_title.gsub(/\W/, '').upcase[0..3] }
    country { Faker::Address.country }
  end
end
