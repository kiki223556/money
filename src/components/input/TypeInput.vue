<template>
  <div class="type-layout">
    <div class="a">
      <el-input v-model="item.title" placeholder="在此輸入備註">
        <template #prepend>
          <span>項目</span>
        </template>
      </el-input>

      <el-input v-model="item.price" placeholder="0" @input="handlePriveInput">
        <template #prepend>
          <span>價位</span>
        </template>
      </el-input>
    </div>

    <div>
      <el-button class="btn" type="primary" @click="add">新增</el-button>
      <el-button class="btn" type="info" @click="deleteItem">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const item = reactive({
  title: "",
  price: "",
});

const handlePriveInput = (val: string) => {
  // 使用正则表达式去除非数字字符
  const formattedValue = val.replace(/\D/g, "");
  item.price = formattedValue;
};

const deleteItem = () => {
  console.log("執行delete");
};

const add = () => {
  if (!item.price.trim()) return alert("價格不能為空");
};
</script>

<style scoped>
.type-layout {
  display: flex;
  flex-direction: column;
}

.a {
  width: 100%;
}

.el-input {
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.btn {
  float: left;
}
</style>
