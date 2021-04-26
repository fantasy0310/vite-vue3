/*
 * @Author: xuhongwei
 * @Date: 2021-04-21 18:10:33
 * @LastEditors: xuhongwei
 * @LastEditTime: 2021-04-23 17:39:55
 */
import Axios from "axios";
import { Toast } from "vant";

const baseURL = "https://api.github.com";

const axios = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      Toast(`Code: ${code}, Message: ${msg}`);
    } else {
      Toast(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default axios;
