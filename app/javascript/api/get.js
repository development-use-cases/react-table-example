import axios from 'axios';

const toQueryArray = (params, wrap = false) => Object.keys(params)
  .map(key => {
    let value = params[key];
    if (typeof value == 'object') {
      return toQueryArray(value, true).map(p => wrap ? `[${key}]${p}` : `${key}${p}`).join("&");
    } else {
      return wrap ? `[${key}]=${value}` : `${key}=${value}`;
    }
  });

export const get = (path, params) => axios
  .get(`${path}?${toQueryArray(params).join("&")}`)
  .then(response => response.data);
