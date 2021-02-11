class Api::SharesController < ApplicationController
  before_action :set_share, only: %i[show]

  def index
    @shares = Share.all
  end

  def show
  end

  private

  def set_share
    @share = Share.find(params[:id])
  end

  def share_params
    params.require(:share).permit(:company_title, :ticker, :country)
  end
end
