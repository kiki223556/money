<template>
  <div class="diary-layout container">
    <div class="btn-and-record-block">
      <!-- 新增紀錄的按鈕 -->
      <div style="display: contents">
        <div class="btn-gradient-background" />
        <div style="position: fixed; display: flex; top: 15px">
          <YearMonthPicker @date-selected="fetchRecordsByMonth" />
          <!-- <YearMonthPicker @date-selected="fetchRecordsByMonth" /> -->
          <div class="btn-show-dialog" @click="showDialog">
            <el-icon class="btn-icon"><Plus /></el-icon>
            新增紀錄
          </div>
        </div>
      </div>
      <!--  記帳紀錄的卡片組件-->
      <div>
        <RecordCard />
      </div>
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
import { useRecordStore } from "@/store/modules/record";

// 表單是否可見
const dialogVisible = ref(false);
const showDialog = () => (dialogVisible.value = true);
const closeDialog = () => (dialogVisible.value = false);

const recordStore = useRecordStore();
const fetchRecordsByMonth = recordStore.fetchRecordsByMonth;
</script>

<style scoped>
.btn-icon {
  padding-right: 6px;
}
.btn-and-record-block {
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
  z-index: 999;
  border-radius: 30px;
  width: 200px;
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
  width: 700px;
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
  .btn-show-dialog {
    width: 120px;
    font-size: 10px;
  }
}
</style>
