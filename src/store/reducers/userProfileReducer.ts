import { UserProfileState } from '@/types/reduxStateType';
import { ProfileAction } from '../actions/profile/profile.action';
import { UserActionType } from '../actions/types.action';

const initState: UserProfileState = {
  userProfile: {},
};

const userProfileReducer = (
  state = initState,
  { type, payload }: ProfileAction,
) => {
  switch (type) {
    case UserActionType.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };

    case UserActionType.CLEAR_USER_PROFILE:
      return {
        ...state,
        userProfile: {},
      };

    default:
      return state;
  }
};

export default userProfileReducer;
