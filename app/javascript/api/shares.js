import axios from 'axios';

export const getShares = () => axios
  .get('/api/shares.json')
  .then(response => response.data);

export const getShare = (id) => axios
  .get(`/api/shares/${id}.json`)
  .then(response => response.data);
