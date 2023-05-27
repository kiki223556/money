<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <!-- <span>{{ receipt[0].date }}</span> -->
        <span>2023/11/11</span>
        <span>$total price</span>
      </div>
    </template>
    <li v-for="r in receipt" :key="r.id" class="text item">
      <el-icon><Burger /></el-icon>
      <span>{{ r.title }}</span>
      <span>$ {{ r.price }}</span>
    </li>
  </el-card>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps(["receipt"]);
console.log("@@", props.receipt);
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 16px;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #dcdfe6;
}

.box-card {
  margin: 10px;
}
</style>
