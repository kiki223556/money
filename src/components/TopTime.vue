<!-- eslint-disable prettier/prettier -->
<template>
  <div class="top-container">
    <!-- 選擇月份 -->
    <span class="demonstration">
      <el-date-picker v-model="value" type="month" :placeholder="NowMonth" size="large" />
    </span>
    <!-- 選擇月份 -->
    <el-button text bg round size="large">{{ countMethod }}</el-button>
    <el-button text bg size="large" :icon="Calendar" circle />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Calendar } from "@element-plus/icons-vue";
import useDate from "@/hooks/useDate";

const NowMonth = useDate().NowMonth;

const value = ref("");
const countMethod = ref("月");
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-right: 20px;
}

.top-container {
  display: block;
  margin-left: 35%;
}
</style>
