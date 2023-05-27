<template>
  <h3 class="mb-2">money web</h3>
  <el-menu default-active="1" class="el-menu-vertical">
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <span>首頁</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>關於</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style scoped>
.el-menu-vertical {
  border-right: none;
  display: block;
}
.el-menu-item {
  font-size: 16px;
}
</style>
