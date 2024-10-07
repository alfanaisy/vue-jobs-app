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