<template>
  <ul class="record-card">
    <template v-for="group in groupedRecords" :key="group.id">
      <el-card class="record-box">
        <template #header>
          <span>{{ group.date }}</span>
        </template>
        <ul class="record-list">
          <li v-for="record in group.records" :key="record.id" class="record-item">
            <div class="record-info">
              <el-button circle size="small" :icon="record.icon" color="#8F43EE" />
              <span class="record-name">{{ record.name }}</span>
            </div>
            <div>
              <span>$ {{ record.price }} </span>
              <el-button
                circle
                class="record-btn"
                type="danger"
                color="#8F43EE"
                size="small"
                :icon="Delete"
                plain
              />
              <el-button
                circle
                class="record-btn"
                color="#8F43EE"
                type="primary"
                size="small"
                :icon="Edit"
                plain
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
defineProps(["groupedRecords"]);
</script>

<style scoped>
.record-info {
  padding-left: 5px;
}
li .record-btn {
  float: right;
  display: none;
}
li:hover .record-btn {
  display: block;
  margin-right: 6px;
}

.record-item:hover {
  border-radius: 5px;
  background-color: #a67cda;
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

.record-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #aeaeae;
  padding: 6px 0;
}

.record-item:last-child {
  border-bottom: 0px;
}

.record-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.record-list {
  padding-inline-start: 0px;
}
</style>
