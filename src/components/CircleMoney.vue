<template>
  <el-affix :offset="90">
    <div class="incomeAndOutcome">
      <span>月支出</span>
      <span>月收入</span>
    </div>
    <div class="incomeAndOutcome">
      <span>${{ MonthOutcome }}</span>
      <span>${{ MonthIncome }}</span>
    </div>
    <!-- 進度條展示 -->
    <div class="demo-progress">
      <el-progress type="circle" :percentage="percentage" :width="300">
        <span class="money-label">月結餘</span>
        <span class="money-value">${{ monthBalance }}</span>
      </el-progress>
    </div>
  </el-affix>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const MonthOutcome = ref(0);
const MonthIncome = ref(0);
const monthBalance = ref(0);

// 進度條展示
const percentage = ref(0);
onMounted(() => {
  setTimeout(() => {
    for (let i = percentage.value; i < 100; i += 10)
      percentage.value = percentage.value + 10;
  }, 500);
});
</script>

<style scoped>
.incomeAndOutcome {
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-progress {
  padding: 10px;
}

.money-value {
  display: block;
  margin-top: 10px;
  font-size: 30px;
  color: #fff;
}
.money-label {
  display: block;
  font-size: 18px;
  color: #fff;
}
</style>
