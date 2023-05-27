<template>
  <div class="container">
    <LayoutAside></LayoutAside>
    <LayoutMain>
      <router-view></router-view>
    </LayoutMain>
  </div>
</template>

<script setup lang="ts">
import LayoutAside from "./components/LayoutAside.vue";
import LayoutMain from "./components/LayoutMain.vue";
</script>

<style scoped></style>
