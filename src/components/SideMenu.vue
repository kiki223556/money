<template>
  <h3>money web</h3>
  <el-menu
    :default-active="activeIndex"
    text-color="#fff"
    active-text-color="#F0EB8D"
    background-color="#8F43EE"
    class="el-menu-vertical"
  >
    <router-link :to="item.path" v-for="item in menuLists" :key="item.id">
      <el-menu-item :index="item.id">
        <el-link :underline="false" :icon="item.icon" />
        <h3>{{ item.title }}</h3>
      </el-menu-item>
    </router-link>
  </el-menu>
  <div class="avatar">
    <UserAvatar></UserAvatar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UserAvatar from "./UserAvatar.vue";
import menuLists from "@/config/menuLists";

const activeIndex = ref("1");
</script>

<style scoped>
.el-menu-vertical {
  background-color: transparent;
  overflow-y: scroll;
}
.avatar {
  flex: initial;
  min-height: 100px;
}
</style>
