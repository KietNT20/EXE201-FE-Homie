import { REGEX } from "@/constant/regex";
import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Vui lòng nhập email hợp lệ")
      .required("Yêu cầu nhập email"),
    password: yup
      .string()
      // .min(8, "Mật khẩu cần ít nhất 8 ký tự")
      // .matches(REGEX.PASSWORD, "Mật khẩu không hợp lệ")
      .required("Yêu cầu nhập mật khẩu"),
  })
  .required();

export const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email")
      .matches(REGEX.EMAIL, "Invalid email")
      .required("Email is required"),
    name: yup.string().required("Username is required"),
    // Kiểm tra email hợp lệ bằng regex

    // Kiểm tra mật khẩu có tối thiểu 8 ký tự
    password: yup
      .string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  })
  .required();
