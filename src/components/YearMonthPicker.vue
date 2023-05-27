<!-- eslint-disable prettier/prettier -->
<template>
  <div class="yearMonth-container">
    <button @click="NowMonth = NowMonth + `0`">前</button>
    <h3>{{ NowMonth }}</h3>
    <button @click="NowMonth = NowMonth + `1`">後</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useDate from "@/hooks/useDate";

const NowMonth = ref(useDate().NowMonth);
</script>

<style scoped>
.yearMonth-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
