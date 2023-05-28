<template>
  <div class="aside-layout aside-text">
    <SideMenu></SideMenu>
  </div>
</template>

<script setup lang="ts">
import SideMenu from "@/components/SideMenu.vue";
</script>

<style scoped>
.aside-layout {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 320px;
  float: left;
  height: 100vh;
  background-color: #413543;
}
.aside-text {
  color: #fff;
}
</style>
