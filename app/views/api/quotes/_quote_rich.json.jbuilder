json.partial! 'api/quotes/quote', quote: quote
json.share do
  json.partial! 'api/shares/share', share: quote.share
end
