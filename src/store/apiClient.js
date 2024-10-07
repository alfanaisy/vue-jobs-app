import { reactive } from 'vue';

export const authStore = reactive({
  token: localStorage.getItem('token') || '',
  setToken(newToken) {
    this.token = newToken;
    localStorage.setItem("token", newToken);
  },
  clearToken() {
    this.token = "";
    localStorage.removeItem("token");
  }
});