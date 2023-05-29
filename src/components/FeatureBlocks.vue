<template>
  <el-row justify="center">
    <el-col
      v-for="(item, id) in introductions"
      :key="id"
      :span="6"
      :offset="id > 0 ? 1 : 0"
    >
      <el-button :icon="item.icon" circle size="large" color="#F0EB8D" />
      <h2>{{ item.title }}</h2>
      <h3>{{ item.description }}</h3>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import introductions from "@/config/Introductions";
</script>

<style scoped></style>
