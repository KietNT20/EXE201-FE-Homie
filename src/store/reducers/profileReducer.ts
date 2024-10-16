import { GET_PROFILES, UPDATE_PROFILES } from '../actions/profileAction';

const initState = {
  getProfiles: {},
};

const profileReducer = (
  state = initState,
  { type, payload }: ActionReduxType,
) => {
  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        getProfiles: payload,
      };

    case UPDATE_PROFILES:
      return {
        ...state,
        getProfiles: payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
