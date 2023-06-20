<template>
  <h3>{{ appTitle }}</h3>
  <el-menu
    class="el-menu-vertical"
    :default-active="handleIndex"
    text-color="#fff"
    active-text-color="#F0EB8D"
    background-color="#8F43EE"
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
import { computed, ref } from "vue";
import UserAvatar from "./UserAvatar.vue";
import menuLists from "@/config/menuLists";
import { useRoute } from "vue-router";

const appTitle = ref("Money web");
const route = useRoute();

const handleIndex = computed(() => {
  const foundMenu = menuLists.find((m) => m.path === route.path);
  if (foundMenu) {
    return foundMenu.id;
  } else {
    return "1";
  }
});
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
@media (max-width: 1000px) {
  h3 {
    display: none;
  }
}
</style>
