<!-- eslint-disable prettier/prettier -->
<template>
  <div class="input-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>
          <h3 style="margin-left: 30px">點擊新增一筆紀錄</h3>
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

interface ReceiptItem {
  id: string;
  date: string;
  icon: string;
  title: string;
  price: number;
}

// const receipt: ReceiptItem[] = reactive([
//   { date: "2023/1/1", icon: "Burger", title: "Burger", price: 80 },
//   { date: "2023/1/2", icon: "Coin", title: "Coin", price: 180 },
//   { date: "2023/1/3", icon: "Phone", title: "Phone", price: 280 },
// ]);

const clickType = (item: ReceiptItem) => {
  console.log("!!!!", item);
};
</script>

<style scoped>
.header-icon {
  margin-right: 10px;
}
.input-container {
  padding-top: 20px;
  width: 50%;
}
</style>
