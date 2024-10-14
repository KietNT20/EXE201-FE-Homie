import { SET_USER_PROFILE } from "../actions/userProfileAction/userProfileAction";

const initState: UserProfileState = {
  userProfile: {},
};

const userProfileReducer = (
  state = initState,
  { type, payload }: UserProfileAction,
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
