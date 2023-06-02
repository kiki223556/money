<template>
  <el-tabs v-model="isOutcome" type="border-card" class="tabs" :stretch="true">
    <el-tab-pane label="支出" name="outcome">
      <el-space wrap>
        <el-button
          v-for="(o, index) in categories.outcomes"
          :key="index"
          :icon="o.icon"
          class="text item"
          @click="selectCategory(o)"
        >
          {{ o.type }}
        </el-button>
      </el-space>
    </el-tab-pane>
    <el-tab-pane label="收入" name="income">
      <el-space wrap>
        <el-button
          v-for="(i, index) in categories.incomes"
          :key="index"
          :icon="i.icon"
          class="text item"
          @click="selectCategory(i)"
        >
          {{ i.type }}
        </el-button>
      </el-space>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import categories from "@/config/categories";

const isOutcome = ref("outcome");
// eslint-disable-next-line prettier/prettier
let data = reactive<{ id: number; type: string; icon: string }[]>([]);

const selectCategory = (value: { id: number; type: string; icon: string }) => {
  console.log(value);
  data.push({ ...value });
  console.log(data);
};
</script>

<style scoped>
.text {
  font-size: 16px;
  color: #fff;
  background-color: #413543;
}
.item {
  border-radius: 20px;
  border-color: rgb(108, 121, 132);
}
.tabs {
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  border-color: #fff;
}
</style>
