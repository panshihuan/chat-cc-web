import axios from "axios";
import qs from "qs";
import { showToast } from "vant";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

//http request 拦截器
service.interceptors.request.use(
  (config) => {
    if(!config.noToken) {
      const token = localStorage.getItem('token');
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // 配置请求头
    //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
    config.headers["Content-Type"] = "application/json;charset=UTF-8"
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//http response 拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(4444444, error)
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      // showMessage(response.status);           // 传入响应码，匹配响应码对应信息
      showToast({
        type: "fail",
        message: response.data.message || '响应失败',
      });
      return Promise.reject(response.data);
    } else {
      showToast({
        type: "fail",
        message: "网络连接异常，请稍后再试！",
      });
    }
  }
);

// 封装 GET POST 请求并导出
export function request(url = "", params = {}, type = "GET", config={}) {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === "GET") {
      promise = service({
        url,
        params,
        // params: qs.stringify(params),
        ...config
      });
    } else if (type.toUpperCase() === "POST") {
      promise = service({
        method: "POST",
        url,
        data: params,
        ...config
      });
    }
    //处理返回
    promise
      .then((res) => {
        if (res?.data?.data?.code === -1) {
          showToast({
            type: "fail",
            message: res.data.data.msg,
          });
          reject(res.data.data);
          return
        }
        resolve(res?.data?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default service;
