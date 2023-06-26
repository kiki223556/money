export interface GetRecordByMonthRequestData {
  year: number;
  month: number;
}

export interface GetRecordByMonthReponseData {
  id: number;
  date: string;
  icon: string;
  type: string;
  name: string;
  price: number;
}
