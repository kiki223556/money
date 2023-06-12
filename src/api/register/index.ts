import request from "@/utills/axios";
import type * as Register from "@/api/register/type/register";

export function getRegisterApi(data: Register.RegisterRequestData) {
  return request<Register.RegisterRequestData>({
    url: "register",
    method: "post",
    data,
  });
}
