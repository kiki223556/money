import { postCreateRecordApi } from "@/api/diaryRecords/createRecord";
import { getRecordByIdApi } from "@/api/diaryRecords/getRecordById";
import { getRecordByMonthApi } from "@/api/diaryRecords/getReocrdByMonth";
import useDate, {
  transformedDateToDayOfWeek,
  transformedDateWithoutDayOfWeek,
} from "@/hooks/useDate";
import { DiaryRecord } from "@/types/record";
import { defineStore } from "pinia";
import { computed, reactive, watch } from "vue";

export const useRecordStore = defineStore("record", () => {
  // 初始化紀錄為空數組
  const records = reactive<DiaryRecord[]>([]);

  // 初始化表單為空數組
  const nowDate = useDate().NowDayOfWeek;
  const form = reactive<DiaryRecord>({
    id: 0,
    date: nowDate,
    icon: "",
    type: "",
    name: "",
    price: 0,
  });

  // 監聽表單中價格字段的變化，如果不是數字則轉換為數字類型
  watch(
    () => form.price,
    (newPrice) => {
      if (typeof newPrice !== "number") {
        form.price = parseFloat(newPrice) || 0;
      }
    }
  );

  // 選擇表單中的圖標
  const selectIcon = (icon: string) => (form.icon = icon);

  // 提交表單，新增一筆記錄
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
      console.log("record:", records);
      resetFormValue();
    } catch (error) {
      console.error("Failed to add:", error);
    }
  };

  // 重置表單數據
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

  // 新增一筆紀錄
  const createRecord = async (record: DiaryRecord) => {
    try {
      const response = await postCreateRecordApi(record);
      records.push(response.data);
    } catch (error) {
      console.error("Failed to createRecord:", error);
    }
  };

  // 根據日期將紀錄進行分組，並按日期排序
  const groupedRecords = computed(() => {
    const groups: { [date: string]: { date: string; records: DiaryRecord[] } } = {};
    for (const record of records) {
      if (!(record.date in groups)) {
        groups[record.date] = { date: record.date, records: [] };
      }
      groups[record.date].records.push(record);

      watch(groupedRecords, (newGroupedRecords) => {
        groupedRecords.value.splice(0, groupedRecords.value.length, ...newGroupedRecords);
      });
    }
    return Object.values(groups).sort((a, b) => b.date.localeCompare(a.date));
  });

  // 根據年月獲取對應的紀錄數據
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
      }
    } catch (error) {
      console.error("Failed to fetchRecordsByMonth:", error);
    }
  };

  const deleteRecord = async (id: number) => {
    try {
      await getRecordByIdApi({ id });
      const index = records.findIndex((record) => record.id === id);
      if (index !== -1) {
        records.splice(index, 1);
      }
    } catch (error) {
      console.error("Failed to deleteRecord:", error);
    }
  };

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
    selectIcon,
    resetFormValue,
    records,
    groupedRecords,
    fetchRecordsByMonth,
    createRecord,
    deleteRecord,
  };
});
