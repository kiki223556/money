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
          <template v-if="!userInfo.name">
            <GoogleLogin :callback="callback" />
          </template>
          <template v-else>
            <el-dropdown-item @click="logout" :icon="ArrowLeft">登出</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { ArrowLeft, UserFilled } from "@element-plus/icons-vue";
import { decodeCredential } from "vue3-google-login";
import { ElMessage } from "element-plus";
import { getLoginApi } from "@/api/login";
import { useUserStore } from "@/store/modules/user";
import { UserData } from "@/types/userData";

const userInfo = reactive({
  avatar: "",
  name: "",
  email: "",
  password: "password",
});

const callback = (response: { credential: string }) => {
  const userData: UserData = decodeCredential(response.credential);

  userInfo.avatar = userData.picture;
  userInfo.name = userData.name;
  userInfo.email = userData.email;

  getLoginApi({
    username: userInfo.name,
    password: "password",
    email: userData.email,
  })
    .then((res) => {
      const store = useUserStore();
      const access_token = res.access_token;
      const refresh_token = res.refresh_token;
      store.setAccessToken(access_token);
      store.setRefreshToken(refresh_token);
      ElMessage({
        showClose: true,
        message: "已成功登入！",
        type: "success",
      });
    })
    .catch((error) => {
      ElMessage({
        showClose: true,
        message: `登錄出錯，${error}`,
        type: "error",
      });
    });
};

const logout = () => {
  console.log("logout");
  userInfo.avatar = "";
  userInfo.name = "";
  userInfo.email = "";

  ElMessage({
    showClose: true,
    message: "已完成登出！",
    type: "success",
  });
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
