import { authService } from '@/services/authService';
import { ActionReduxType, DispatchType } from '@/types/type';

export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const setUserProfile = (params: string) => {
  return async (dispatch: DispatchType<ActionReduxType>) => {
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
