<template>
  <h3 class="a">money web</h3>
  <el-menu
    default-active="1"
    text-color="#fff"
    active-text-color="#F0EB8D"
    background-color="#8F43EE"
    class="el-menu-vertical a"
  >
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <span>首頁</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Setting /></el-icon>
      <span>設定</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Document /></el-icon>
      <span>備註</span>
    </el-menu-item>
  </el-menu>
  <div class="a">
    <UserAvatar></UserAvatar>
  </div>
</template>

<script lang="ts" setup>
import UserAvatar from "./UserAvatar.vue";
</script>

<style scoped>
.el-menu-vertical {
  background-color: transparent;
  overflow-y: scroll;
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
}
.el-menu-item {
  font-size: 16px;
}
.a {
  flex: 0;
}
</style>
