import axios from 'axios';

import qs from 'qs';

// Format nested params
axios.interceptors.request.use(config => {
  config.paramsSerializer = params => qs.stringify(params, {
    arrayFormat: "brackets",
    encode: false
  });

  return config;
});

export const get = (path, params = {}) => axios
  .get(path, { params })
  .then(response => response.data);
