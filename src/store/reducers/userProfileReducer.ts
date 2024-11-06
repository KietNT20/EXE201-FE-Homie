import { UserProfileState } from '@/types/reduxStateType';
import { SET_USER_PROFILE } from '../actions/userProfileAction';
import { ActionReduxType } from '@/types/type';

const initState: UserProfileState = {
  userProfile: {},
};

const userProfileReducer = (
  state = initState,
  { type, payload }: ActionReduxType,
) => {
  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };

    default:
      return state;
  }
};

export default userProfileReducer;
