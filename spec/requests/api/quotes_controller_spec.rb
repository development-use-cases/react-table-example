require 'rails_helper'

RSpec.describe "Api::QuotesControllers", type: :request do
  describe "GET #index" do
    before do
    end

    context 'without sorting' do
      before { get '/api/quotes/2020-12-31' }

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end
    end
  end
end
