import { defineStore } from "pinia";
import store from "@/store/index";

export const useUserStore = defineStore("user", () => {
  const state = {
    jwtToken: "",
    username: "",
  };

  // 在創建 store 時，可以從 localStorage 中讀取 jwtToken 並設置到 state 中
  state.jwtToken = localStorage.getItem("token") || "";

  // 定義操作 state 的方法
  const setJwtToken = (token: string) => {
    state.jwtToken = token;
    // 在設置 jwtToken 時，同時更新 localStorage 中的值
    localStorage.setItem("token", token);
  };

  return {
    state,
    setJwtToken,
  };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
