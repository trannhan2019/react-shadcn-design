import Axios from "axios";
import NProgress from "nprogress";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

axios.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        window.location.href = "/login";
        break;
      case 403:
        window.location.href = "/login";
        break;
      default:
        NProgress.done();
        return Promise.reject(error);
    }
  },
);

export default axios;
