import axios from 'axios';

export const zippopotamApi = axios.create({
  baseURL: 'http://api.zippopotam.us',
  timeout: 5000,
});
