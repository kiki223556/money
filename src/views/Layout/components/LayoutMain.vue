<template>
  <div class="main-layout main-text">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-layout {
  background-color: #2d2727;
  height: 100svh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
}
.main-text {
  color: #fff;
}
</style>
