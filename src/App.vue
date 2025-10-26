<script setup>
  import { RouterView } from 'vue-router';
  import AppLayout from './Layout/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <main class="container">
      <RouterView/>
    </main>
  </AppLayout>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}
</style>