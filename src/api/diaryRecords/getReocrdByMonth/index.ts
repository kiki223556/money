import request from "@/utils/axios";
import type * as Record from "@/api/diaryRecords/getReocrdByMonth/type/getReocrdByMonth";

export function getRecordByMonthApi(data: Record.GetRecordByMonthRequestData) {
  const { year, month } = data;
  return request.get<Record.GetRecordByMonthReponseData>(
    `diary-records/${year}/${month}`
  );
}
