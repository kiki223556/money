<template>
  <div class="year-month-picker">
    <el-button @click="sharedState.year--" :icon="DArrowLeft" circle color="#413543" />
    <el-button @click="decrementMonth" :icon="ArrowLeft" circle color="#413543" />
    <span class="date-text">{{ sharedState.year }} 年 {{ sharedState.month }} 月</span>
    <el-button @click="incrementMonth" :icon="ArrowRight" circle color="#413543" />
    <el-button @click="sharedState.year++" :icon="DArrowRight" circle color="#413543" />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { DArrowLeft, ArrowLeft, DArrowRight, ArrowRight } from "@element-plus/icons-vue";
import { useRecordStore } from "@/store/modules/record";
import { sharedState } from "@/hooks/useDate";

function incrementMonth() {
  if (sharedState.month === 12) {
    sharedState.month = 1;
    sharedState.year++;
  } else {
    sharedState.month++;
  }
}

function decrementMonth() {
  if (sharedState.month === 1) {
    sharedState.month = 12;
    sharedState.year--;
  } else {
    sharedState.month--;
  }
}

const recordStore = useRecordStore();
const fetchRecordsByMonth = recordStore.fetchRecordsByMonth;
watchEffect(() => {
  fetchRecordsByMonth({ year: sharedState.year, month: sharedState.month });
});
</script>

<style scoped>
.year-month-picker {
  display: flex;
  align-items: center;
}
.date-text {
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
}
</style>
