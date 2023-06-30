<template>
  <el-form :model="form" label-width="50px">
    <div class="card-header">
      <el-form-item label="日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          :placeholder="useDate().NowDayOfWeek"
          style="width: 190px"
          value-format="YYYY-MM-DD ddd"
        ></el-date-picker>
      </el-form-item>
    </div>

    <el-form-item label="類別">
      <el-select v-model="form.type" placeholder="請選擇類別">
        <el-option-group
          v-for="group in categories"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.categories"
            :key="item.id"
            :label="item.type"
            :value="item.type"
            @click="recordStore.selectIcon(item.icon)"
          >
            <el-button
              style="border: 0px; background-color: transparent"
              :icon="item.icon"
            />
            <span>{{ item.type }}</span>
          </el-option>
        </el-option-group>
      </el-select>
    </el-form-item>

    <el-form-item label="品名">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="價格">
      <el-input v-model.number="form.price" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="add">確定</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useRecordStore } from "@/store/modules/record";
import useDate from "@/hooks/useDate";
import categories from "@/config/categories";

const emit = defineEmits(["closeDialog", "formDate"]);

const recordStore = useRecordStore();
const form = recordStore.form;
const add = () => {
  if (!form.type) return alert("請選擇類別");
  recordStore.add();
  const formDate = form.date;
  emit("formDate", formDate);
  emit("closeDialog");
};
const cancel = () => emit("closeDialog");
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
