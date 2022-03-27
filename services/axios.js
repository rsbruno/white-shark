import axios from "axios";

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://gestao-hostel-app.herokuapp.com',
  timeout: 1000,
});

instance.defaults.headers.post['Accept'] = '*/*';
instance.defaults.headers.post['Accept-Encoding'] = 'gzip,deflate,br';
instance.defaults.headers.post['Connection'] = 'keep-alive';
instance.defaults.headers.post['X-Request-With'] = 'XMLHttpRequest';

export default instance;