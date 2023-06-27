import { postCreateRecordApi } from "@/api/diaryRecords/createRecord";
import { getRecordByMonthApi } from "@/api/diaryRecords/getReocrdByMonth";
import useDate, {
  transformedDateToDayOfWeek,
  transformedDateWithoutDayOfWeek,
} from "@/hooks/useDate";
import { DiaryRecord } from "@/types/record";
import _ from "lodash";
import { defineStore } from "pinia";
import { computed, reactive, toRaw, watch } from "vue";

export const useRecordStore = defineStore("record", () => {
  // 初始為空數組
  const records = reactive<DiaryRecord[]>([]);
  // 表單
  const nowDate = useDate().NowDayOfWeek;
  const form = reactive<DiaryRecord>({
    id: 0,
    date: nowDate,
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
    try {
      const response = await postCreateRecordApi({
        ...form,
        date: transformedDateWithoutDayOfWeek(form.date),
      });
      console.log("資料:", response);
      const newRecord = {
        id: response.id,
        date: transformedDateToDayOfWeek(response.date),
        icon: response.icon,
        type: response.type,
        name: response.name || response.type,
        price: response.price,
      };
      records.push(newRecord);
      records.splice(0, records.length, ...toRaw(records));
      console.log("record:", records);
      resetFormValue();
    } catch (error) {
      console.error("API 调用失败:", error);
    }
  };

  // 重置表單
  const resetFormValue = () => {
    Object.assign(form, {
      id: 0,
      date: nowDate,
      icon: "",
      type: "",
      name: "",
      price: 0,
    });
  };

  // 1.依日期新增卡片
  // 2.日期相同就將紀錄新增在同一張卡片，反之，則新建一張卡片
  // 3.依日期順序，由近至遠排列
  const groupedRecords = computed(() => {
    const groups: { [date: string]: { date: string; records: DiaryRecord[] } } = {};
    for (const record of records) {
      if (!(record.date in groups)) {
        groups[record.date] = { date: record.date, records: [] };
      }
      groups[record.date].records.push(record);
    }
    return Object.values(groups).sort((a, b) => b.date.localeCompare(a.date));
  });

  const fetchRecordsByMonth = async (data: { year: number; month: number }) => {
    const { year, month } = data;
    try {
      const response = await getRecordByMonthApi({ year, month });
      records.splice(0);
      for (const record of response) {
        records.push({
          id: record.id,
          date: transformedDateToDayOfWeek(record.date),
          icon: record.icon,
          type: record.type,
          name: record.name || record.type,
          price: record.price,
        });
        records.splice(0, records.length, ...toRaw(records));
      }
    } catch (error) {
      console.error("Failed to fetch records:", error);
    }
  };

  const createRecord = async (record: DiaryRecord) => {
    try {
      const response = await postCreateRecordApi(record);
      records.push(response.data);
    } catch (error) {
      console.error("Failed to create record:", error);
    }
  };

  // async function deleteRecord(recordId: string) {
  //   try {
  //     await deleteRecordApi(recordId);
  //     records = records.filter((record) => record.id !== recordId);
  //   } catch (error) {
  //     console.error("Failed to delete record:", error);
  //   }
  // }

  // async function updateRecord(record: DiaryRecord) {
  //   try {
  //     const response = await updateRecordApi(record);
  //     const index = records.findIndex((r) => r.id === record.id);
  //     if (index !== -1) {
  //       records[index] = response.data;
  //     }
  //   } catch (error) {
  //     console.error("Failed to update record:", error);
  //   }
  // }

  return {
    form,
    add,
    updateIcon,
    resetFormValue,
    records,
    groupedRecords,
    fetchRecordsByMonth,
    createRecord,
  };
});
