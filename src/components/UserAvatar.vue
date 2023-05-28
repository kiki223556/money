<template>
  <div class="avatar-container">
    <div>
      <el-avatar>user</el-avatar>
      <span>使用者名稱</span>
    </div>
    <div class="more-icon">
      <el-icon><MoreFilled /></el-icon>
    </div>
  </div>
</template>

<style scoped>
.avatar-container {
  border-top: 1px solid #fff;
  width: 280px;
  margin: 0 20px;
  position: absolute;
  bottom: 20px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
}

.el-avatar {
  margin-right: 10px;
}
.more-icon {
  margin: 10px 5px 0 0;
}
</style>
