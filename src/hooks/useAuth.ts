import { PATH } from "@/constant/path";
import { InputLoginTypes } from "@/pages/LoginPage/schemas/type";
import { authService } from "@/services/authService";
import { setUserProfile } from "@/store/actions/userProfileAction";
import tokenMethod from "@/util/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./reudxHook";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate, ...rest } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: InputLoginTypes) =>
      authService.login({ email, password }),
    onSuccess: (response) => {
      // console.log("login success", response);
      toast.dismiss();
      queryClient.setQueryData(["user"], response);
      tokenMethod.set({ token: response?.data?.tokenString });
      dispatch<any>(setUserProfile(tokenMethod.get()?.token));
      toast.success("Đăng nhập thành công");
      navigate(PATH.HOME, { replace: true });
    },
    onError: (error) => {
      toast.dismiss();
      console.log("Login failed", error);
      toast.error("Đăng nhập thât bại");
    },
  });

  return { mutate, ...rest };
};
