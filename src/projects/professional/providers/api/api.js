import axios from 'axios';

const API_URL = 'https://api.example.com';
const END_URL = '#';

const ApiService = {

  get() {
    return axios.get(`${API_URL}/${END_URL}`);
  },

  post(data) {
    return axios.post(`${API_URL}/${END_URL}`, data);
  },
};

export default ApiService;