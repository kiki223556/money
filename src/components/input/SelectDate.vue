<template>
  <div class="demo-date-picker">
    <div class="block">
      <el-date-picker
        v-model="date"
        type="date"
        format="YYYY-MM-DD ddd"
        :placeholder="NowDayOfWeek"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useDate from "@/hooks/useDate";

const date = ref("");

let NowDayOfWeek = useDate().NowDayOfWeek;
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  margin: 0 20px;
}

.demo-date-picker .block {
  padding: 10px 0;
  text-align: center;
  /* flex: 1; */
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
</style>
