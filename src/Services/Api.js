import axios from "axios";

const api = axios.create({
  baseURL:'http:/172.29.16.45:3000/'
});

export default api;