<script setup>
import { onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
import axios from 'axios';
import { authStore } from './store/apiClient';

onMounted(async () => {
  if (!authStore.token) {
    try {
      const response = await axios.post('/api/admins/auth-with-password', {
        identity: 'alfanaisy7@gmail.com',
        password: 'pocketbase-password',
      });
      authStore.setToken(response.data.token);
    } catch (error) {
      console.error('Failed to fetch api token', error);
    }
  }
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>
