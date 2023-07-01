<template>
  <div class="diary-layout container">
    <div class="btn-and-record-block">
      <!-- 新增紀錄的按鈕 -->
      <div class="btn-gradient-background" />
      <div style="position: fixed; display: flex; top: 15px">
        <YearMonthPicker />
        <div class="btn-show-dialog" @click="showDialog">
          <el-icon class="btn-icon"><Plus /></el-icon>
          新增
        </div>
      </div>
    </div>
    <!-- 月支出收入 -->
    <div
      style="
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 70px;
      "
    >
      <Statistic />
      <!--  記帳紀錄的卡片組件-->
      <RecordCard @showDialog="showDialog" />
    </div>
  </div>
  <!-- 點擊按鈕後出現的表單 -->
  <el-dialog
    :visible="dialogVisible"
    v-model="dialogVisible"
    title="新增一筆紀錄"
    width="400px"
  >
    <RecordForm @closeDialog="closeDialog" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import RecordCard from "@/components/Diary/RecordCard.vue";
import RecordForm from "@/components/Diary/RecordForm.vue";
import YearMonthPicker from "@/components/YearMonthPicker.vue";
import Statistic from "@/components/Statistic.vue";

// 表單是否可見
const dialogVisible = ref(false);
const showDialog = () => (dialogVisible.value = true);
const closeDialog = () => (dialogVisible.value = false);
</script>

<style scoped>
.btn-icon {
  padding-right: 6px;
}
.btn-and-record-block {
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.btn-show-dialog {
  cursor: pointer;
  min-height: 30px;
  border: 1px solid #fff;
  background-color: #f0eb8d;
  color: black;
  border-radius: 30px;
  width: 100px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-show-dialog:hover {
  background-color: #f7ee4b;
  transition: all 0.2s ease-in-out;
}
.btn-gradient-background {
  position: fixed;
  top: 0px;
  height: 80px;
  background: linear-gradient(to top, rgba(45, 39, 39, 0), rgba(45, 39, 39, 1) 30px);
  width: -webkit-fill-available;
}

.diary-layout {
  height: 100%;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: start;
  align-items: center;
}

@media (max-width: 1000px) {
  .btn-gradient-background {
    width: 410px;
  }
}
</style>
