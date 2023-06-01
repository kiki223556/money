<template>
  <div class="type-layout">
    <div class="a">
      <el-input v-model="input" placeholder="在此輸入備註">
        <template #prepend>
          <span>項目</span>
        </template>
      </el-input>

      <el-input v-model="price" placeholder="0" @input="handlePriveInput">
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
import { ref } from "vue";
import { nanoid } from "nanoid";

// eslint-disable-next-line no-undef
const props = defineProps(["receipt", "clickType"]);
console.log("##", props.receipt, props.clickType);

const input = ref("");
const price = ref("");

// eslint-disable-next-line no-undef
const emit = defineEmits(["addReceipt"]);

// eslint-disable-next-line no-undef
// const emit = defineEmits(["addReceipt"]);

const handlePriveInput = (val: string) => {
  // 使用正则表达式去除非数字字符
  const formattedValue = val.replace(/\D/g, "");
  price.value = formattedValue;
};

const deleteItem = () => {
  console.log("執行delete");
};

const add = () => {
  if (!price.value.trim()) return alert("價格不能為空");
  const item = {
    id: nanoid(),
    title: input.value || props.receipt[0].type,
    price: price.value,
  };
  console.log("item:", item);
  emit("addReceipt", item);
};
</script>

<style scoped>
.type-layout {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
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
