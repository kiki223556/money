import request from "@/utils/axios";
import type * as Token from "@/api/refreshToken/type/refreshToken";

export function postRefreshTokenApi(error) {
  const originalRequest = error.config;
  return request
    .post("refresh-token", error)
    .then((response) => {
      // 成功獲取新的 access token
      if (response.status === 200) {
        // 更新本地儲存的 access token
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("access_token", newAccessToken);
        // 將原始請求的 Authorization 標頭更新為新的 access token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        // 重新發送原始請求
        return request(originalRequest);
      }
    })
    .catch((error) => {
      // 處理 refresh-token 失敗的情況
      // 清除本地儲存的 token，並重新導向到登入頁面
      localStorage.removeItem("access_token");
      window.location.href = "/";
      return Promise.reject(error);
    });
}
