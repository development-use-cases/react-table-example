FactoryBot.define do
  factory :quote do
    cost { rand(1_00..100_00) }
    date { Time.zone.now }
    share
  end
end
