import { authService } from '@/services/authService';
import { Dispatch } from '@reduxjs/toolkit';
import { ProfileAction } from './profile/profile.action';
import { UserActionType } from './types.action';

export const setUserProfile = (params: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const res = await authService.getUserByToken(params);
    try {
      if (res) {
        dispatch({
          type: UserActionType.SET_USER_PROFILE,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearUserProfile = () => {
  return (dispatch: Dispatch<ProfileAction>) => {
    dispatch({
      type: UserActionType.CLEAR_USER_PROFILE,
      payload: null,
    });
  };
};
