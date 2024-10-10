import axios from "axios";
import { BASE_URL } from "../config/environment";
import tokenMethod from "./token";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${tokenMethod.get().tokenString}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const originalRequest = error.config;

    // If error status is 403 or 401 and request has not key _retry
    if (
      (error.response?.status === 403 || error.response?.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // Call API refresh token for new token
        // const res = await axiosInstance.get(`${API.REFRESH_TOKEN}`, {
        //   headers: {
        //     Authorization: `Bearer ${tokenMethod.get()?.refresh_token}`,
        //   },
        // });

        // const { access_token, refresh_token } = (res as TokenResponse) || {};
        // // Save new token to localStorage
        // tokenMethod.set({
        //   access_token,
        //   refresh_token,
        // });

        // Change Authorization header
        // originalRequest.headers.Authorization = `Bearer ${access_token}`;

        // Call API again with new token
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error);
        // Handle when refresh token fail
        tokenMethod.remove();
        return Promise.reject(error);
      }
    }
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
