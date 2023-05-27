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
  width: 320px;
  float: left;
  height: 100vh;
  background-color: #413543;
}
.aside-text {
  color: #fff;
  align-items: start;
  justify-content: center;
}
</style>
