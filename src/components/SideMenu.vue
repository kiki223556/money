<template>
  <div class="sidemenu-container">
    <h3>money web</h3>
    <el-menu
      default-active="1"
      text-color="#fff"
      active-text-color="#F0EB8D"
      background-color="#8F43EE"
      class="el-menu-vertical"
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
    <div class="avatar-content">
      <UserAvatar></UserAvatar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserAvatar from "./UserAvatar.vue";
</script>

<style scoped>
.el-menu-vertical {
  background-color: transparent;
  overflow-y: scroll;
}
.el-menu-item {
  font-size: 16px;
}
.sidemenu-container {
  height: 80vh;
  display: flex;
  flex-direction: column;
}
.avatar-content {
  height: 400px;
}
</style>
