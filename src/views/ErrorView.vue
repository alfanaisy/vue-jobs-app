<script setup>
import router from '@/router';
import { authStore } from '@/store/apiClient';

const goBack = () => {
  authStore.clearToken();
  router.push('/');
};
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-yellow-500 text-7xl mb-5"></i>
    <h1 class="text-6xl font-bold mb-4">Error</h1>
    <p class="text-xl mb-5">Some error has occurred</p>
    <button
      @click="goBack"
      class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
    >
      Go Back Home
    </button>
  </section>
</template>
