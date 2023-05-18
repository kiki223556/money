<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span>yyyy/mm/dd mon</span>
        <el-button class="button" text>$total pcice</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      <span>icon</span>
      <span>{{ "List item " + o }}</span>
      <span>$price</span>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

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
  margin-top: 10px;
  width: 100%;
}
</style>
