import axios from 'axios';
function Api() {
  const BASE_URL = 'http://127.0.0.1:8080/api';

  const HEADERS = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  };

  const http = axios.create({
    baseURL: BASE_URL,
    headers: HEADERS,
  });

  return {
    http,
  };
}

export default Api;
