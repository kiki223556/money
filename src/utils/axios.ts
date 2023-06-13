import axios from "axios";
import { ElMessage } from "element-plus";
import { get } from "lodash-es";

// 設置基本的URL和默認的請求配置
const request = axios.create({
  baseURL: "http://localhost:8081/api/v1/auth",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// 添加請求攔截器：對每筆請求設置request.headers的預處理
request.interceptors.request.use((config) => {
  // 從本地存儲中獲取 JWT，並將其添加到請求的 Authorization 標頭中
  const jwtToken = localStorage.getItem("token");
  config.headers["Authorization"] = jwtToken ? `Bearer ${jwtToken}` : null;
  return config;
});

// 添加響應攔截器：收到響應後，統一全局的響應結果格式化及錯誤處理
request.interceptors.response.use(
  (response) => {
    // 1.code === undefined：非後端開發之api
    // 2.code < 400：業務沒有錯誤
    // 3.code >= 400：返回一個拒絕的Promise，Error對象作為拒絕原因
    if (response.status === undefined) {
      ElMessage.error("非本系統接口");
      return Promise.reject(new Error("非本系統接口"));
    }
    if (response.status < 400) {
      return response.data;
    } else {
      ElMessage.error(response.data.message || "Error");
      return Promise.reject(new Error("Error"));
    }
  },
  (error) => {
    // ststus是http的狀態碼
    const status = get(error, "response.status");
    switch (status) {
      case 400:
        error.message = "請求錯誤";
        break;
      case 401:
        // Token過期時，直接退出登錄並強制刷新頁面
        useUserStoreHook().logout();
        location.reload();
        break;
      case 403:
        error.message = "拒絕訪問";
        break;
      case 404:
        error.message = "請求地址出錯";
        break;
      case 408:
        error.message = "請求超時";
        break;
      case 500:
        error.message = "伺服器內部錯誤";
        break;
      case 501:
        error.message = "服務未實現";
        break;
      case 502:
        error.message = "伺服器錯誤";
        break;
      case 503:
        error.message = "服務不可用";
        break;
      case 504:
        error.message = "伺服器超時";
        break;
      case 505:
        error.message = "HTTP 版本不受支持";
        break;
      default:
        break;
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

export default request;
