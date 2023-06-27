import request from "@/utils/axios";
import type * as Record from "@/api/diaryRecords/getRecordById/type/getRecordById";

export function getRecordByIdApi(data: Record.GetRecordByIdRequestData) {
  const { id } = data;
  return request.get<Record.GetRecordByIdReponseData>(`diary-records/${id}`);
}
