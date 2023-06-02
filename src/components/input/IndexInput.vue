<!-- eslint-disable prettier/prettier -->
<template>
  <div class="input-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>
          <h3 style="margin-left: 30px">點擊新增一筆紀錄</h3>
        </template>

        <!-- 引入組件 -->
        <div class="a">
          <SwitchOption />
          <DatePicker />
          <TypeInput />
        </div>
        <!-- 引入組件 -->
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SwitchOption from "./SwitchOption.vue";
import TypeInput from "./TypeInput.vue";
import DatePicker from "./DatePicker.vue";

const activeNames = ref(["0"]);

interface Item {
  id: string;
  type: string;
  icon: string;
  date: string;
  title: string;
  price: number;
}
</script>

<style scoped>
.a {
  margin: 0 20px;
}
.input-container {
  padding-top: 20px;
  width: 50%;
}

.el-collapse {
  --el-collapse-border-color: #413543;
  --el-collapse-header-bg-color: #413543;
  --el-collapse-header-text-color: #fff;
  --el-collapse-content-bg-color: #413543;
  --el-collapse-content-text-color: #fff;
  border-top: 1px solid #f0eb8d;
  border-bottom: 1px solid #413543;
}
</style>
