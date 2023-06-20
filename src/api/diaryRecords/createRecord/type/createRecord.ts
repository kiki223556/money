export interface CreateRecordRequestData {
  date: string;
  icon: string;
  type: string;
  name: string;
  price: number;
}

export interface CreateRecordReponseData {
  id: number;
  date: string;
  icon: string;
  type: string;
  name: string;
  price: number;
}
