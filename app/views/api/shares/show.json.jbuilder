json.partial! 'api/shares/share', share: @share
json.quotes do
  json.array! @share.quotes, partial: 'api/quotes/quote', as: :quote
end
