<template>
  <div class="demo-date-picker">
    <div class="block">
      <el-date-picker v-model="date" type="date" :placeholder="NowDate" />
    </div>

    <div class="block radio-block">
      <el-radio-group v-model="radio">
        <el-radio-button label="無" />
        <el-radio-button label="1/週" />
        <el-radio-button label="2/週" />
        <el-radio-button label="4/週" />
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const date = ref("");
const radio = ref("無");

//取得當前月份
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const NowDate = currentYear + "-" + currentMonth + "-" + currentDay;
</script>

<style scoped>
.radio-block {
  margin-left: 12px;
}
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 10px 0;
  text-align: center;
  /* flex: 1; */
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
</style>
