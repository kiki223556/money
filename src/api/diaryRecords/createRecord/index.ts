import request from "@/utils/axios";
import type * as Record from "@/api/diaryRecords/createRecord/type/createRecord";

export function postCreateRecordApi(data: Record.CreateRecordRequestData) {
  return request.post<Record.CreateRecordReponseData>("diary-records/create", data);
}
