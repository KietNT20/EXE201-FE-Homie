import { SET_USERS, UserActionTypes } from "../actions/userAction";

const initState = {
  userList: [],
};

var userReducer = (state = initState, { type, payload }: UserActionTypes) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        userList: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
