export interface GetDailyRecordCostRequestData {
  year: number;
  month: number;
}

export interface GetDailyRecordCostResponseData {
  date: string;
  totalPrice: number;
}
