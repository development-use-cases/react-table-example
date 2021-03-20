require 'rails_helper'

require 'factory_bot_rails'
require 'faker'

RSpec.describe "Api::QuotesControllers", type: :request do
  describe "GET #index" do
    before do
      FactoryBot.with_options date: '2020-12-31' do |f|
        f.create(:quote, company: 'Alphabet Inc', ticker: 'GOOG')
        f.create(:quote, company: 'Apple Inc', ticker: 'AAPL')
        f.create(:quote, company: 'Apple Inc', ticker: 'AAPL')
        f.create(:quo)
      end
    end

    context 'without sorting' do
      before { get '/api/quotes/2020-12-31.json' }

      it "returns http success" do
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body).size).to eq(5)
      end
    end
  end
end
