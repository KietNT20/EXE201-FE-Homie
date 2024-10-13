import { userService } from "@/services/userService";
import { User } from "@/types/reduxTypes";
import { Dispatch } from "redux";

export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const SET_USERS = "SET_USERS";

export type UserActionTypes =
  | { type: typeof CREATE_USER; payload?: User }
  | { type: typeof UPDATE_USER; payload?: User }
  | { type: typeof GET_ALL_USER; payload?: User[] }
  | { type: typeof GET_USER_BY_ID; payload?: User }
  | { type: typeof SET_USERS; payload?: User[] };

export const getAllUser = () => {
  return async (dispatch: Dispatch) => {
    const res = await userService.getUserList();
    try {
      if (res) {
        dispatch({
          type: SET_USERS,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
