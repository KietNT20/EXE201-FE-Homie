import { API } from "@/api/apiUrl";
import axiosInstance from "@/util/axiosInstance";

export const userService = {
  getUserList() {
    return axiosInstance.get(API.USER_API.GET_ALL);
  },
};
