<!-- eslint-disable prettier/prettier -->
<template>
  <div class="avatar-container">
    <div class="avatar-align">
      <el-avatar v-show="!userInfo.avatar" :icon="UserFilled" />
      <el-avatar v-show="userInfo.avatar" :src="userInfo.avatar" />
      <span v-show="!userInfo.name">尚未登入</span>
      <span>{{ userInfo.name }}</span>
    </div>
    <el-dropdown>
      <button class="more-icon">
        <el-icon><MoreFilled /></el-icon>
      </button>
      <template #dropdown>
        <el-dropdown-menu>
          <GoogleLogin :callback="callback" />
          <el-dropdown-item @click="logout" :icon="ArrowLeft">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { ArrowLeft, UserFilled } from "@element-plus/icons-vue";
import { decodeCredential } from "vue3-google-login";

const userInfo = reactive({
  avatar: "",
  name: "",
});

const callback = (response: { credential: string }) => {
  const userData = decodeCredential(response.credential);
  console.log("Handle the userData", userData);

  userInfo.avatar = userData.picture;
  userInfo.name = userData.name;
};

const logout = () => {
  console.log("logout");
};
</script>

<style scoped>
.avatar-align {
  display: flex;
  align-items: center;
}
.avatar-container {
  border: 0px;
  border-top: 1px solid #fff;
  width: 280px;
  margin: 0 20px;
  position: absolute;
  bottom: 20px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;

  background-color: transparent;
  color: #fff;
}

.el-avatar {
  margin-right: 10px;
}
.more-icon {
  cursor: pointer;
  margin: 10px 5px 10px 0;
  background-color: transparent;
  border: 0px;
  color: #fff;
}

.more-icon:hover {
  background-color: #67586a;
}
</style>
