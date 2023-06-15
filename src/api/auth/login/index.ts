import request from "@/utils/axios";
import type * as Login from "@/api/auth/login/type/login";

export function postLoginApi(data: Login.LoginRequestData) {
  return request.post<Login.LoginReponseData>("auth/login", data);
}
