import axios from 'axios';

export const get = (path) => axios
  .get(path)
  .then(response => response.data);
