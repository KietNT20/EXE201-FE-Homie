import {
  SET_USER_PROFILE,
  UserProfileActionTypes,
} from "../actions/userProfileAction";

const initState = {
  userProfile: {},
};

const userProfileReducer = (
  state = initState,
  { type, payload }: UserProfileActionTypes,
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
