import { get } from './get';

export const getQuotes = (date, params = {}) =>
  get(`/api/quotes/${date}.json`, params);
