import request from "@/utils/axios";
import type * as Login from "@/api/login/type/login";

export function getLoginApi(data: Login.LoginRequestData) {
  return request.post<Login.LoginReponseData>("login", data);
}
