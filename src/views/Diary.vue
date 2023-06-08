<template>
  <div class="diary-layout container">
    <div class="btn-and-record-block">
      <!-- 新增紀錄的按鈕 -->
      <div class="btn-gradient-background" />
      <div class="btn-show-dialog" @click="showDialog">
        <el-icon class="btn-icon"><Plus /></el-icon>
        新增一筆紀錄
      </div>
      <!--  記帳紀錄的卡片組件-->
      <div class="record-block">
        <RecordCard
          :groupedRecords="groupedRecords"
          :records="records"
          v-on:delete-record="deleteRecord"
        />
      </div>
    </div>
  </div>
  <!-- 點擊按鈕後出現的表單 -->
  <el-dialog
    :visible="dialogVisible"
    v-model="dialogVisible"
    title="新增一筆紀錄"
    width="30%"
  >
    <RecordForm v-on:addRecord="addRecord" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { DiaryRecord } from "@/types/record";
import { Plus } from "@element-plus/icons-vue";
import RecordCard from "@/components/Diary/RecordCard.vue";
import RecordForm from "@/components/Diary/RecordForm.vue";

// 表單是否可見
const dialogVisible = ref(false);
const showDialog = () => (dialogVisible.value = true);

// 初始為空數組
const records = ref([] as DiaryRecord[]);

// 1.依日期新增卡片
// 2.日期相同就將紀錄新增在同一張卡片，反之，則新建一張卡片
// 3.依日期順序，由近至遠排列
const groupedRecords = computed(() => {
  const groups = new Map();
  for (const record of records.value as DiaryRecord[]) {
    if (!groups.has(record.date)) {
      groups.set(record.date, {
        date: record.date,
        records: [],
      });
    }
    groups.get(record.date).records.push(record);
  }
  return Array.from(groups.values()).sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
});

// 新增一個record
const addRecord = (newRecord: DiaryRecord) => {
  records.value.push(newRecord);
  setTimeout(() => {
    dialogVisible.value = false;
  }, 300);
};

// 刪除一個record
const deleteRecord = (id: string) => {
  const index = records.value.findIndex((record) => record.id === id);
  records.value.splice(index, 1);
};
</script>

<style scoped>
.record-block {
  display: block;
  position: relative;
  top: 60px;
  z-index: 0;
}
.btn-icon {
  padding-right: 10px;
}
.btn-and-record-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.btn-show-dialog {
  cursor: pointer;
  position: fixed;
  min-height: 40px;
  border: 1px solid #fff;
  background-color: #f0eb8d;
  color: black;
  z-index: 999;
  border-radius: 30px;
  width: 500px;
  margin: 20px 10px 0 10px;
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
  height: 100px;
  background: linear-gradient(to top, rgba(45, 39, 39, 0), rgba(45, 39, 39, 1) 30px);
  z-index: 999;
  width: 700px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.diary-layout {
  height: 100%;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: start;
  align-items: center;
}
</style>
