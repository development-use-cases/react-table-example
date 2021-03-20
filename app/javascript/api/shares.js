import { get } from './get';

export const getShares = (params = {}) =>
  get('/api/shares.json', params)
  .then(response => response.data);

export const getShare = (id) =>
  get(`/api/shares/${id}.json`)
  .then(response => response.data);
