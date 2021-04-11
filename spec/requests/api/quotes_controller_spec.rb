require 'rails_helper'

require 'factory_bot_rails'
require 'faker'

RSpec.describe 'Api::QuotesControllers', type: :request do
  describe 'GET #index' do
    before do
      FactoryBot.with_options date: '2020-12-31' do |f|
        f.create(:quote, cost: 100, share: google)
        f.create(:quote, cost: 101, share: google)
        f.create(:quote, cost: 20, share: apple)
        f.create(:quote, cost: 21, share: apple)
      end

      get '/api/quotes/2020-12-31.json?sort[cost]=asc'
    end

    let(:google) do
      FactoryBot.create(:share, company_title: 'Alphabet Inc', ticker: 'GOOG')
    end
    let(:apple) do
      apple = FactoryBot.create(:share, company_title: 'Apple Inc', ticker: 'AAPL')
    end

    let(:defaults) do
      { id: be_an(Integer), date: '2020-12-31' }
    end

    let(:expected_result) do
      [
        {
          cost: 20,
          share_id: apple.id,
        },
        {
          cost: 21,
          share_id: apple.id,
        },
        {
          cost: 100,
          share_id: google.id,
        },
        {
          cost: 101,
          share_id: google.id,
        }
      ].map! { |h| h.with_defaults!(defaults).stringify_keys! }
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns all the shares sorted by cost' do
      expect(JSON.parse(response.body)).to match(expected_result)
    end
  end
end
