<template>
  <div class="home-layout">
    <div class="home-content">
      <h2>MONEY WEB</h2>
      <h1>::: 一起輕鬆理財 :::</h1>
      <FeatureBlocks />
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureBlocks from "@/components/FeatureBlocks.vue";
</script>

<style scoped>
.home-layout {
  overflow-y: scroll;
  height: 100vh;
}

.home-content {
  margin-top: 200px;
}

.home-content h1 {
  margin-bottom: 50px;
  padding-bottom: 50px;
}
</style>
