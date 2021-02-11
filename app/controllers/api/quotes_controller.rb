class Api::QuotesController < ApplicationController
  def index
    @quotes = Quote.includes(:share).where(date: params[:date])
  end
end
