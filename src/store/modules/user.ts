import { defineStore } from "pinia";
import store from "@/store/index";

export const useUserStore = defineStore("user", () => {
  // 初始化token為空
  const state = {
    access_token: "",
    refresh_token: "",
  };

  // 在創建store時，會從localStorage中嘗試讀取token並設置到state中
  state.access_token = localStorage.getItem("access_token") || "";
  state.refresh_token = localStorage.getItem("refresh_token") || "";

  // 在呼叫方法並傳入新的token時，會同時更新token狀態並更新localStorage中token的值
  const setAccessToken = (token: string) => {
    state.access_token = token;
    localStorage.setItem("access_token", token);
  };
  const setRefreshToken = (token: string) => {
    state.refresh_token = token;
    localStorage.setItem("refresh_token", token);
  };

  return {
    state,
    setAccessToken,
    setRefreshToken,
  };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
