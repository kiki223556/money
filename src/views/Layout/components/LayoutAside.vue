<template>
  <div class="aside-layout aside-text">
    <SideMenu></SideMenu>
    <UserAvatar></UserAvatar>
  </div>
</template>

<script setup lang="ts">
import SideMenu from "@/components/SideMenu.vue";
import UserAvatar from "@/components/UserAvatar.vue";
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
