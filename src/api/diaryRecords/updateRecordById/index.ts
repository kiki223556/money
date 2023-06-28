import request from "@/utils/axios";
import type * as Record from "@/api/diaryRecords/updateRecordById/type/updateRecordById";

export function putUpdateRecordByIdApi(data: Record.UpdateRecordByIdRequestData) {
  const { id, ...requestData } = data;
  return request.put<Record.UpdateRecordByIdReponseData>(
    `diary-records/${id}`,
    requestData
  );
}
