import request from "@/utils/axios";
import type * as Record from "@/api/diaryRecords/getDailyRecordCost/type/getDailyRecordCost";

export function getDailyRecordCostApi(data: Record.GetDailyRecordCostRequestData) {
  const { year, month } = data;
  return request.get<Record.GetDailyRecordCostResponseData>(
    `daily/cost/${year}/${month}`
  );
}
