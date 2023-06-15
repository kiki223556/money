<template>
  <div class="avatar-container">
    <div v-if="userInfo.isLogin" class="avatar-info">
      <div class="avatar-wrapper">
        <el-avatar :src="userInfo.avatar" />
        <span>{{ userInfo.name }}</span>
      </div>
      <el-button class="logout-btn" @click="logout">
        <el-icon><ArrowLeft /></el-icon>
        登出
      </el-button>
    </div>
    <div v-else class="login-btn">
      <GoogleLogin :callback="callback" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { ArrowLeft } from "@element-plus/icons-vue";
import { decodeCredential } from "vue3-google-login";
import { ElMessage } from "element-plus";
import { postLoginApi } from "@/api/login";
import { useUserStore } from "@/store/modules/user";
import { UserData } from "@/types/userData";

const userInfo = reactive({
  isLogin: false,
  avatar: "",
  name: "",
  email: "",
  password: "password",
});

// 在應用程序初始化時，從持久化存儲中讀取用戶登入狀態
onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const { avatar, name } = JSON.parse(storedUser);
    userInfo.avatar = avatar;
    userInfo.name = name;
    userInfo.isLogin = true;
  }
});

const callback = (response: { credential: string }) => {
  const userData: UserData = decodeCredential(response.credential);

  userInfo.isLogin = true;
  userInfo.avatar = userData.picture;
  userInfo.name = userData.name;
  userInfo.email = userData.email;

  // 在應用程序初始化時，從持久化存儲中讀取用戶登入狀態
  localStorage.setItem(
    "user",
    JSON.stringify({ avatar: userData.picture, name: userData.name })
  );

  postLoginApi({
    username: userInfo.name,
    password: "password",
    email: userData.email,
  })
    .then((res) => {
      const userStore = useUserStore();
      const access_token = res.access_token;
      const refresh_token = res.refresh_token;
      userStore.setAccessToken(access_token);
      userStore.setRefreshToken(refresh_token);
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
  userInfo.isLogin = false;
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
.avatar-container {
  border: 0px;
  border-top: 1px solid #fff;
  width: 280px;
  margin: 0 20px;
  position: absolute;
  bottom: 20px;
  padding: 15px 0px;

  background-color: transparent;
  color: #fff;
}
.avatar-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.avatar-wrapper {
  display: flex;
  align-items: center;
}
.login-btn {
  margin-top: 12px;
  display: flex;
}
.el-avatar {
  margin-right: 10px;
}
.logout-btn {
  cursor: pointer;
  margin: 10px 5px 10px 0;
  background-color: transparent;
  border: 0px;
  color: #fff;
}

.logout-btn:hover {
  background-color: #67586a;
  color: #fff;
}
</style>
