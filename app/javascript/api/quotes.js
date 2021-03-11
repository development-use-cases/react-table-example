import axios from 'axios';

export const getQuotes = (date) => axios
  .get(`/api/quotes/${date}.json`)
  .then(response => response.data);
