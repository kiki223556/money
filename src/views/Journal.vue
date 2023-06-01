<template>
  <div class="journal-content">
    <!-- <button class="add-button">新增</button> -->
    <IndexInput></IndexInput>
  </div>
</template>

<script setup lang="ts">
import IndexInput from "@/components/input/IndexInput.vue";
</script>

<style scoped>
.journal-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
}
.add-button {
  position: sticky;
  top: 20px;
  margin: 0 10px;
  background-color: transparent;
  color: #fff;
  border: 3px solid #f0eb8d;
  font-size: 20px;
  font-weight: 500;
  width: 600px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-button:hover {
  background-color: #4f4e36;
}
</style>
