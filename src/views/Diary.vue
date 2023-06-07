<template>
  <div class="diary-layout container">
    <el-button
      @click="showDialog"
      class="show-dialog-btn"
      :icon="Plus"
      circle
      size="large"
      color="#F0EB8D"
    />
    <el-dialog
      v-model="dialogVisible"
      title="新增一筆紀錄"
      :visible="dialogVisible"
      width="30%"
    >
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

    <RecordCard :groupedRecords="groupedRecords" />
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { nanoid } from "nanoid";
import useDate from "@/hooks/useDate";
import categories from "@/config/categories";
import { Plus } from "@element-plus/icons-vue";
import { DiaryRecord } from "@/types/record";
import RecordCard from "../components/Diary/RecordCard.vue";

let NowDayOfWeek = useDate().NowDayOfWeek;

const form = reactive({
  id: nanoid(),
  date: NowDayOfWeek,
  icon: "",
  type: "",
  name: "",
  price: 0,
});

const updateIcon = (icon: string) => {
  form.icon = icon;
};
const records = ref([]);

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
  console.log(newRecord);
  records.value.push(newRecord);
  setTimeout(() => {
    dialogVisible.value = false;
  }, 300);
  resetFormValue();
};

const resetFormValue = function () {
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

  return Array.from(groups.values()).sort((a, b) => {
    return a.date.localeCompare(b.date);
  });
});

const dialogVisible = ref(false);

function showDialog() {
  dialogVisible.value = true;
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.show-dialog-btn {
  position: fixed;
  display: block;
  top: 30px;
  margin: 30px;
  border: 0px;
}
.show-dialog-btn:hover {
  border: 0px;
  background-color: #e1d500;
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
