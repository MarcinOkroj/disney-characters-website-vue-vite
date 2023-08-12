<script lang="ts" setup>
import Dashboard from './components/Dashboard.vue';
import Favourites from './components/Favourites.vue';
import Header from './components/Header.vue'; 
</script>

<template>
  <header>
    <Header />
  </header>

  <div class="table-wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}

.table-wrapper {
  display: flex;
  justify-content: center;
}
</style>
