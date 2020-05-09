import axios from 'axios';

const request = axios.create();

request.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
request.defaults.timeout = 30000;
request.defaults.baseURL = 'https://images-api.nasa.gov';

request.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      return Promise.reject({ code: error.response.status, message: error.response.data.message }); // eslint-disable-line
    }
    if (error.request)
      return Promise.reject({ message: 'No response was received' }); // eslint-disable-line
    return Promise.reject(error);
  },
);

export const searchImages = text =>
  request.get(`search?q=${text}&page=1&media_type=image`);
