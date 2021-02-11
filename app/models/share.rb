class Share < ApplicationRecord
  has_many :quotes

  validates_uniqueness_of :ticker
end
