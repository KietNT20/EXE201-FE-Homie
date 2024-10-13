import { authService } from "@/services/authService";
import { AppDispatch, RootState } from "../store";

export const SET_USER_PROFILE = "SET_USER_PROFILE";

export type UserProfileActionTypes = {
  type: typeof SET_USER_PROFILE;
  payload?: string;
};

export const setUserProfile = (params: string) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    const res = await authService.getUserByToken(params);
    try {
      if (res) {
        dispatch({
          type: SET_USER_PROFILE,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
