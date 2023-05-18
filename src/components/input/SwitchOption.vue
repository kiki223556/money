<template>
  <ElTabs v-model="isOutcome" type="border-card" class="tabs" :stretch="true">
    <ElTabPane label="支出" name="outcome">
      <el-space wrap>
        <ElButton
          v-for="(o, index) in categories.outcomes"
          :key="index"
          :icon="o.icon"
          class="text item"
          @click="handleBtnClick(o)"
        >
          {{ o.title }}
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
          @click="handleBtnClick(i)"
        >
          {{ i.title }}
        </ElButton>
      </el-space>
    </ElTabPane>
  </ElTabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import categories from "@/config/categories";

const isOutcome = ref("outcome");
// eslint-disable-next-line no-undef
const emit = defineEmits(["selectCategory"]);

const handleBtnClick = (event: { id: number; title: string; icon: string }) => {
  console.log("title:", event.title);
  console.log("id:", event.id);
  console.log("icon:", event.icon);
  emit("selectCategory", event.id, event.title, event.icon);
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
  height: 260px;
  background-color: transparent;
}
</style>
