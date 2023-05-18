<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>
          <el-icon class="header-icon" size="20"><Pointer /></el-icon>
          <h3>點擊新增一筆紀錄</h3>
        </template>

        <!-- 引入組件 -->
        <SwitchOption />
        <SelectDate />
        <TypeInput />
        <!-- 引入組件 -->
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import SwitchOption from "./SwitchOption.vue";
import TypeInput from "./TypeInput.vue";
import SelectDate from "./SelectDate.vue";

const activeNames = ref(["0"]);
</script>

<style scoped>
.header-icon {
  margin-right: 10px;
}
</style>
