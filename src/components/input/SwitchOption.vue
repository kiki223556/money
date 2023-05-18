<template>
  <ElTabs v-model="isOutcome" type="border-card" class="tabs" :stretch="true">
    <ElTabPane label="支出" name="outcome">
      <ElButton
        v-for="(o, index) in categories.outcomes"
        :key="index"
        :icon="o.icon"
        class="text item"
        @click="handleBtnClick(o)"
      >
        {{ o.title }}
      </ElButton>
    </ElTabPane>
    <ElTabPane label="收入" name="income">
      <ElButton
        v-for="(i, index) in categories.incomes"
        :key="index"
        :icon="i.icon"
        class="text item"
        @click="handleBtnClick(i)"
      >
        {{ i.title }}
      </ElButton>
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
.el-button {
  background-color: transparent;
}
.text {
  font-size: 16px;
  color: #666;
}
.item {
  display: inline-flex;
  float: left;
  border: 1px solid #888;
  padding: 5px 10px;
  margin: 6px 0px 6px 12px;
  border-radius: 20px;
}
.tabs {
  border-radius: 5px;
  width: 100%;
  height: 300px;
  background-color: transparent;
}
</style>
