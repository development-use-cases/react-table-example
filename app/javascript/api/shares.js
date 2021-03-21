import { get } from './get';

export const getShares = (params = {}) =>
  get('/api/shares.json', params);

export const getShare = (id) =>
  get(`/api/shares/${id}.json`);
