<!-- eslint-disable prettier/prettier -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <!-- el-header -->
        <el-header>
          <TopTime />
        </el-header>
        <!-- el-header -->
        <!-- el-main -->
        <el-main>
          <el-row>
            <!-- left -->
            <el-col :span="11"><CircleMoney /></el-col>
            <!-- middle -->
            <el-col :span="1">
              <el-affix :offset="90">
                <el-divider direction="vertical" />
              </el-affix>
            </el-col>
            <!-- right -->
            <el-col :span="12">
              <IndexInput />
              <IndexReceipt />
            </el-col>
          </el-row>
        </el-main>
        <!-- el-main -->
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import CircleMoney from "@/components/CircleMoney.vue";
import TopTime from "@/components/TopTime.vue";
import IndexInput from "@/components/input/IndexInput.vue";
import IndexReceipt from "@/components/receipt/IndexReceipt.vue";
</script>

<style scoped>
.el-divider {
  height: 88vh;
}
.common-layout {
  height: 100%;
}

.el-container {
  height: 100%;
}
.el-aside {
  width: 250px;
  padding: 30px;
  border-left: 1px solid #dcdfe6;
}

.el-header {
  height: 70px;
  display: flex;
  padding: 15px;
  border-right: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
}

.el-main {
  border: 1px solid #dcdfe6;
}
</style>
