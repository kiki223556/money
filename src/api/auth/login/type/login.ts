export interface LoginRequestData {
  username: string;
  password: string;
  email: string;
}

export interface LoginReponseData {
  access_token: string;
  refresh_token: string;
}
