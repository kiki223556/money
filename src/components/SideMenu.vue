<template>
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
</template>

<script lang="ts" setup></script>

<style scoped>
.el-menu-vertical {
  background-color: transparent;
}
.el-menu-item {
  font-size: 16px;
}
</style>
