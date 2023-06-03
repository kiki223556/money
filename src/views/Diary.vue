<!-- eslint-disable prettier/prettier -->
<template>
  <div class="journal-layout container">
    <el-button
      @click="showDialog"
      class="show-dialog-btn"
      :icon="Edit"
      circle
      size="large"
      type="warning"
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
              />
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

    <ul class="item-card">
      <template v-for="group in groupedRecords" :key="group.id">
        <el-card class="box-card">
          <template #header>
            <span>{{ group.date }}</span>
          </template>
          <ul class="v">
            <li v-for="record in group.records" :key="record.id" class="item">
              <div>
                <el-tag type="info" color="#413543" round>{{ record.type }}</el-tag>
                <span class="e">{{ record.name }}</span>
              </div>
              <span>$ {{ record.price }}</span>
            </li>
          </ul>
        </el-card>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { nanoid } from "nanoid";
import useDate from "@/hooks/useDate";
import categories from "@/config/categories";
import { Edit } from "@element-plus/icons-vue";
import { DiaryRecord } from "@/types/record";

let NowDayOfWeek = useDate().NowDayOfWeek;

const form = reactive({
  id: nanoid(),
  date: NowDayOfWeek,
  icon: "",
  type: "",
  name: "",
  price: 0,
});

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

const showDialog = () => {
  dialogVisible.value = true;
};
</script>

<style scoped>
.e {
  margin-left: 10px;
}
.box-card {
  margin: 10px;
  width: 500px;
  color: #fff;
  background-color: #413543;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 6px 0;
}
.item:hover {
  margin-left: 4px;
  transition: all 0.2s ease-in;
}
.item:last-child {
  border-bottom: 0px;
}

.show-dialog-btn {
  position: fixed;
  display: block;
  top: 30px;
  margin: 30px;
}
.journal-layout {
  height: 100%;
  display: block;
  overflow-y: scroll;
  justify-content: start;
  align-items: center;
}
.item-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.v {
  padding-inline-start: 0px;
}
</style>
