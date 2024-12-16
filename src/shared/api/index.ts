import axios from 'axios';

export const URL_SERVER = 'http://www.filltext.com/';

export const api = axios.create({
  baseURL: URL_SERVER,
});
