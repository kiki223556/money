<template>
  <div class="year-month-picker">
    <el-button @click="year--" :icon="DArrowLeft" circle color="#413543" />
    <el-button @click="decrementMonth" :icon="ArrowLeft" circle color="#413543" />
    <span class="date-text">{{ year }} 年 {{ month }} 月</span>
    <el-button @click="incrementMonth" :icon="ArrowRight" circle color="#413543" />
    <el-button @click="year++" :icon="DArrowRight" circle color="#413543" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { DArrowLeft, ArrowLeft, DArrowRight, ArrowRight } from "@element-plus/icons-vue";
import { useRecordStore } from "@/store/modules/record";

const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth() + 1);

function incrementMonth() {
  if (month.value === 12) {
    month.value = 1;
    year.value++;
  } else {
    month.value++;
  }
}

function decrementMonth() {
  if (month.value === 1) {
    month.value = 12;
    year.value--;
  } else {
    month.value--;
  }
}

const recordStore = useRecordStore();

const fetchRecordsByMonth = recordStore.fetchRecordsByMonth;
watchEffect(() => {
  fetchRecordsByMonth({ year: year.value, month: month.value });
});
</script>

<style>
.year-month-picker {
  z-index: 999;
  display: flex;
}
.date-text {
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
}
</style>
