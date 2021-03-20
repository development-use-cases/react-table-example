class Api::QuotesController < ApplicationController
  def index
    @quotes = Quote.includes(:share).where(date: params[:date]).order(sort_params)
  end

  private

  def sort_params
    params.fetch(:sort, {}).permit(:id, :cost, :share_id, :date).to_h
  end
end
