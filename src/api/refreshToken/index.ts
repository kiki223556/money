import request from "@/utils/axios";
import type * as Token from "@/api/refreshToken/type/refreshToken";

export function postRefreshTokenApi(data: Token.TokenRequestData) {
  return request
    .post<Token.TokenReponseData>("refresh-token", data)
    .then((response) => {
      // 確認 response 不為空值
      if (response?.status === 200) {
        // 更新本地儲存的 access token
        const newAccessToken = response.data?.access_token;
        if (newAccessToken) {
          localStorage.setItem("access_token", newAccessToken);
          // 返回新的 access token
          return newAccessToken;
        }
      }
      return null;
    })
    .catch((error) => {
      // 處理 refresh-token 失敗的情況
      // 清除本地儲存的 token，並重新導向到登入頁面
      localStorage.removeItem("access_token");
      // window.location.href = "/";
      return Promise.reject(error);
    });
}
