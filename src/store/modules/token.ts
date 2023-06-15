import { defineStore } from "pinia";
import { postRefreshTokenApi } from "@/api/refreshToken";
import { TokenRequestData } from "@/api/refreshToken/type/refreshToken";
import { ElMessage } from "element-plus";
import jwt_decode from "jwt-decode";
import { DecodedToken } from "@/types/decodedToken";

export const useTokenStore = defineStore("token", () => {
  let accessTokenExp: number | null = null;

  // 解析access_token，取得exp時間
  function decodeAccessToken() {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      try {
        const decodedToken = jwt_decode(accessToken) as DecodedToken;
        accessTokenExp = decodedToken.exp;
        console.log(decodedToken);
      } catch (error) {
        console.error("Failed to decode JWT:", error);
      }
    } else {
      console.error("Access token not found.");
    }
  }

  function monitorAccessTokenExpiration() {
    if (accessTokenExp) {
      const currentTime = Math.floor(Date.now() / 1000); // 獲取當前時間（以秒為單位）
      const timeUntilExpiration = accessTokenExp - currentTime;
      const refreshThreshold = timeUntilExpiration - 24 * 60 * 60;

      if (timeUntilExpiration <= refreshThreshold) {
        // access_token 即將過期，需要刷新
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken !== null) {
          // 檢查 refreshToken 是否為有效值
          const requestData: TokenRequestData = { refresh_token: refreshToken };
          postRefreshTokenApi(requestData)
            .then((response) => {
              if (response !== null) {
                let newAccessToken = response;
                // 更新成功，將新的 access_token 使用或儲存到你的應用程式狀態中
                newAccessToken = newAccessToken;
                localStorage.setItem("access_token", newAccessToken);
              }
            })
            .catch((error) => {
              // 處理刷新失敗的情況
              console.error("刷新存取權杖失敗", error);
              // 顯示錯誤訊息給使用者
              ElMessage.error("請重新登入", error);
              // 清除本地儲存的 token，並重新導向到登入頁面
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
            });
        }
      }
      // 設定下一次檢查的時間，可以使用 setTimeout 或其他定時器機制
      const nextCheckTime = accessTokenExp / 4;
      setTimeout(monitorAccessTokenExpiration, nextCheckTime);
    }
  }

  return {
    monitorAccessTokenExpiration,
    decodeAccessToken,
  };
});
