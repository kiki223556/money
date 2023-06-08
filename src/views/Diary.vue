<template>
  <div class="diary-layout container">
    <div class="btn-and-record-block">
      <div class="btn-gradient-background" />
      <div class="btn-show-dialog" @click="showDialog">
        <el-icon class="btn-icon"><Plus /></el-icon>
        新增一筆紀錄
      </div>
      <div class="record-block">
        <RecordCard :groupedRecords="groupedRecords" v-on:delete-record="deleteRecord" />
      </div>
    </div>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="新增一筆紀錄"
    :visible="dialogVisible"
    width="30%"
  >
    <!-- <RecordForm></RecordForm> -->
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

      <el-form-item label="項目">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="價格">
        <el-input v-model.number="form.price" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addRecord">新增</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { nanoid } from "nanoid";
import useDate from "@/hooks/useDate";
import categories from "@/config/categories";
import { Plus } from "@element-plus/icons-vue";
import { DiaryRecord } from "@/types/record";
import RecordCard from "@/components/Diary/RecordCard.vue";
// import RecordForm from "@/components/Diary/RecordForm.vue";

const dialogVisible = ref(false);

function showDialog() {
  dialogVisible.value = true;
}

let NowDayOfWeek = useDate().NowDayOfWeek;

const updateIcon = (icon: string) => {
  form.icon = icon;
};

const form = reactive({
  id: nanoid(),
  date: NowDayOfWeek,
  icon: "",
  type: "",
  name: "",
  price: 0,
});

const records = ref([] as DiaryRecord[]);

const addRecord = () => {
  if (!form.type) return alert("請選擇類別");
  const newRecord: DiaryRecord = {
    id: nanoid(),
    date: form.date,
    icon: form.icon,
    type: form.type,
    name: form.name || form.type,
    price: form.price,
  };
  records.value.push(newRecord);
  setTimeout(() => {
    dialogVisible.value = false;
  }, 300);
  resetFormValue();
};

const resetFormValue = () => {
  form.id = nanoid();
  form.date = NowDayOfWeek;
  form.icon = "";
  form.type = "";
  form.name = "";
  form.price = 0;
};

const groupedRecords = computed(() => {
  const groups = new Map();
  for (const record of records.value as DiaryRecord[]) {
    if (!groups.has(record.date)) {
      groups.set(record.date, {
        date: record.date,
        records: [],
      });
    }
    groups.get(record.date).records.push(record);
  }

  // 卡片依日期順序，由近至遠排列
  return Array.from(groups.values()).sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
});

// 刪除一個record
const deleteRecord = (id: string) => {
  const index = records.value.findIndex((record) => record.id === id);
  records.value.splice(index, 1);
};
</script>

<style scoped>
.record-block {
  display: block;
  position: relative;
  top: 60px;
  z-index: 0;
}
.btn-icon {
  padding-right: 10px;
}
.btn-and-record-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.btn-show-dialog {
  cursor: pointer;
  position: fixed;
  min-height: 40px;
  border: 1px solid #fff;
  background-color: #f0eb8d;
  color: black;
  z-index: 999;
  border-radius: 30px;
  width: 500px;
  margin: 20px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-show-dialog:hover {
  background-color: #f7ee4b;
  transition: all 0.2s ease-in-out;
}
.btn-gradient-background {
  position: fixed;
  height: 100px;
  background: linear-gradient(to top, rgba(45, 39, 39, 0), rgba(45, 39, 39, 1) 30px);
  z-index: 999;
  width: 700px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.diary-layout {
  height: 100%;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: start;
  align-items: center;
}
</style>
