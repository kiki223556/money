<template>
  <ElTabs v-model="isOutcome" type="border-card" class="tabs" :stretch="true">
    <ElTabPane label="支出" name="outcome">
      <el-space wrap>
        <ElButton
          v-for="(o, index) in categories.outcomes"
          :key="index"
          :icon="o.icon"
          class="text item"
          @click="selectCategory(o)"
        >
          {{ o.type }}
        </ElButton>
      </el-space>
    </ElTabPane>
    <ElTabPane label="收入" name="income">
      <el-space wrap>
        <ElButton
          v-for="(i, index) in categories.incomes"
          :key="index"
          :icon="i.icon"
          class="text item"
          @click="selectCategory(i)"
        >
          {{ i.type }}
        </ElButton>
      </el-space>
    </ElTabPane>
  </ElTabs>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import categories from "@/config/categories";

const isOutcome = ref("outcome");
const activeButtonIndex = ref(-1);

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
  color: #666;
}
.item {
  background-color: transparent;
  border: 1px solid #888;
  border-radius: 20px;
}
.tabs {
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
}
</style>
