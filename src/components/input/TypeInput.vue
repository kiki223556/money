<template>
  <div class="type-layout">
    <div>
      <el-input v-model="input" placeholder="在此輸入備註">
        <template #prepend>
          <el-button :icon="icon" />
        </template>
      </el-input>

      <el-input v-model="price" placeholder="0" @input="handlePriveInput">
        <template #prepend>$ </template>
      </el-input>
    </div>

    <div>
      <el-button class="btn" type="info" @click="add">新增</el-button>
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
const icon = ref("Burger");

// eslint-disable-next-line no-undef
const emit = defineEmits(["addReceipt"]);

// eslint-disable-next-line no-undef
// const emit = defineEmits(["addReceipt"]);

const handlePriveInput = (val: string) => {
  // 使用正则表达式去除非数字字符
  const formattedValue = val.replace(/\D/g, "");
  price.value = formattedValue;
};

const add = () => {
  if (!price.value.trim()) return alert("價格不能為空");
  const item = {
    id: nanoid(),
    icon: props.clickType.icon,
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
