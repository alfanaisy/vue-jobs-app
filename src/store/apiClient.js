import axios from 'axios';
import { reactive } from 'vue';

export const authStore = reactive({
  token: JSON.parse(localStorage.getItem('token')) || '',
  setToken(newToken) {
    this.token = newToken;
    localStorage.setItem("token", JSON.stringify(newToken));
  },
  clearToken() {
    this.token = "";
    localStorage.removeItem("token");
  }
});

export const axiosInstance = axios.create({
  baseURL: '/api/collections',
  headers: {
    Authorization: `Bearer ${authStore.token}`
  }
})