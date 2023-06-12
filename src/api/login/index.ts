import request from "@/utills/axios";
import type * as Login from "@/api/login/type/login";

export function getLoginApi(data: Login.LoginRequestData) {
  return request<Login.LoginRequestData>({
    url: "authenticate",
    method: "post",
    data,
  });
}
