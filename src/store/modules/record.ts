import { DiaryRecord } from "@/types/record";
import { defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";

export const useRecordStore = defineStore("record", () => {
  const state = reactive({
    records: [] as DiaryRecord[],
  });

  const id = ref<number>(0);

  const addRecord = (record: DiaryRecord) => {
    state.records.push(record);
  };

  const deleteRecord = (id: number) => {
    const index = state.records.findIndex((record) => record.id === id);

    if (index !== -1) {
      // 从数组中删除该记录
      state.records.splice(index, 1);
    }
  };

  return {
    ...toRefs(state),
    id,
    addRecord,
    deleteRecord,
  };
});
