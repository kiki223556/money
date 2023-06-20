<template>
  <el-form :model="form" label-width="50px">
    <div class="card-header">
      <el-form-item label="日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          :placeholder="NowDayOfWeek"
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
            @click="updateIcon(item.icon)"
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
      <el-button type="primary" @click="add">新增</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { DiaryRecord } from "@/types/record";
import useDate from "@/hooks/useDate";
import categories from "@/config/categories";
import { postCreateRecordApi } from "@/api/diaryRecords/createRecord";
import { useRecordStore } from "@/store/modules/record";

const emit = defineEmits(["addRecord"]);
const dialogVisible = ref(false);
let NowDayOfWeek = useDate().NowDayOfWeek;
let ISO8601 = useDate().ISO8601;

// 初始為空表單，日期為當天
const form = reactive<DiaryRecord>({
  date: NowDayOfWeek,
  icon: "",
  type: "",
  name: "",
  price: 0,
});

watch(
  () => form.price,
  (newPrice) => {
    if (typeof newPrice !== "number") {
      form.price = parseFloat(newPrice) || 0;
    }
  }
);

// 點擊下拉選單內容，即選定icon
const updateIcon = (icon: string) => {
  form.icon = icon;
};

// 1.判斷類別不得為空
// 2.將表單賦值
// 3.將newRecord物件傳給父組件，執行addRecord()
// 4.重置表單
const add = async () => {
  if (!form.type) return alert("請選擇類別");
  const newRecord: DiaryRecord = {
    date: form.date,
    icon: form.icon,
    type: form.type,
    name: form.name || form.type,
    price: form.price,
  };

  try {
    const response = await postCreateRecordApi({
      date: ISO8601,
      icon: form.icon,
      type: form.type,
      name: form.name || form.type,
      price: form.price,
    });

    const id = response.id;
    console.log("生成的 ID:", id);

    emit("addRecord", newRecord);
    resetFormValue();
  } catch (error) {
    console.error("API 调用失败:", error);
  }
};

// 重置表單
const resetFormValue = () => {
  form.date = NowDayOfWeek;
  form.icon = "";
  form.type = "";
  form.name = "";
  form.price = 0;
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
