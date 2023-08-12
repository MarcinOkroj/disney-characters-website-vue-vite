<script lang="ts" setup>
import Table from './components/Table.vue';
import Header from './components/Header.vue'; 
</script>

<template>
  <header>
    <Header />
  </header>

  <div class="table-wrapper">
    <Table />
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
