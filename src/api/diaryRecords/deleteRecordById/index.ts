import request from "@/utils/axios";
import type * as Record from "@/api/diaryRecords/deleteRecordById/type/deleteRecordById";

export function deleteRecordByIdApi(data: Record.DeleteRecordByIdRequestData) {
  const { id } = data;
  return request.delete(`diary-records/${id}`);
}
