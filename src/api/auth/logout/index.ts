import request from "@/utils/axios";

export function postLogoutApi() {
  return request.post("auth/logout");
}
