<template>
  <ul class="record-card">
    <template v-for="group in groupedRecords" :key="group.id">
      <el-card class="record-box">
        <template #header>
          <span>{{ group.date }}</span>
        </template>
        <ul class="record-list">
          <li v-for="record in group.records" :key="record.id" class="record-item">
            <div>
              <el-button circle size="small" :icon="record.icon" color="#8F43EE" />
              <span class="record-name">{{ record.name }}</span>
            </div>
            <div>
              <span>$ {{ record.price }} </span>
              <el-button
                circle
                class="record-btn"
                color="#8f43ee"
                size="small"
                plain
                :icon="Delete"
                @click="handleDelete(record.id)"
              />
              <el-button
                circle
                class="record-btn"
                color="#8f43ee"
                size="small"
                plain
                :icon="Edit"
                @click="handleEdit(record.id)"
              />
            </div>
          </li>
        </ul>
      </el-card>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { Edit, Delete } from "@element-plus/icons-vue";
import { useRecordStore } from "@/store/modules/record";
import { toRefs } from "vue";

const emit = defineEmits(["showDialog"]);

const recordStore = useRecordStore();
const { groupedRecords } = toRefs(recordStore);

// 刪除
const handleDelete = (id: number) => {
  if (confirm("確定刪除嗎？")) {
    recordStore.deleteRecord(id);
  }
};

// 編輯
const handleEdit = (id: number) => {
  const index = recordStore.records.findIndex((record) => record.id === id);
  const editRecord = { ...recordStore.records[index] }; // 複製編輯的紀錄資料
  recordStore.setEditedRecord(editRecord); // 將編輯的紀錄資料設置到 store 中
  emit("showDialog");
};
</script>

<style scoped>
li .record-btn {
  float: right;
  display: none;
}
li:hover .record-btn {
  display: block;
  margin-right: 6px;
}
.record-item:hover {
  background-color: #654689bf;
  transition: all 0.2s ease-in-out;
}
.record-name {
  margin-left: 10px;
}
.record-box {
  margin: 10px;
  width: 500px;
  color: #fff;
  background-color: #413543;
}
@media (max-width: 1000px) {
  .record-box {
    width: 400px;
  }
}

.record-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed #dadada71;
  padding: 6px 10px;
  margin-top: 7px;
  border-radius: 17px;
  background-color: #302b3093;
}

.record-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  padding: 0px;
}
.record-list {
  padding-inline-start: 0px;
}
</style>
