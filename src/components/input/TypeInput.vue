<template>
  <div class="type-layout">
    <div>
      <el-input v-model="input" placeholder="在此輸入備註">
        <template #prepend>
          <el-button :icon="Burger" />
        </template>
      </el-input>

      <el-input v-model="price" placeholder="0" @input="handlePriveInput">
        <template #prepend>$ </template>
      </el-input>
    </div>

    <div>
      <el-button class="btn" type="info">新增</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Burger } from "@element-plus/icons-vue";

const input = ref("");
const price = ref("");

const handlePriveInput = (val: string) => {
  // 使用正则表达式去除非数字字符
  const formattedValue = val.replace(/\D/g, "");
  price.value = formattedValue;
};
</script>

<style scoped>
.type-layout {
  display: flex;
}

.el-input {
  float: left;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.btn {
  float: right;
  width: 60px;
  height: 75px;
  margin-left: 10px;
}
</style>
