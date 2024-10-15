import { profileService } from '@/services/profileService';

export const GET_PROFILES = 'GET_PROFILES';
export const UPDATE_PROFILES = 'UPDATE_PROFILES';

export const setProfiles = (params: number) => {
  return async (dispatch: DispatchType<ActionReduxType>) => {
    const res = await profileService.getProfiles(params);
    try {
      if (res) {
        dispatch({
          type: GET_PROFILES,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfiles = (params: any) => {
  return async (dispatch: DispatchType<ActionReduxType>) => {
    const res = await profileService.updateProfiles(params);
    try {
      if (res) {
        dispatch({
          type: UPDATE_PROFILES,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
