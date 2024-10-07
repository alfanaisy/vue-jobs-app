<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
import router from '@/router';
import { authStore } from '@/store/apiClient';
import axios from 'axios';
import { onMounted } from 'vue';

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
      router.push('/error');
    }
  }
});
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :show-button="true" />
</template>
