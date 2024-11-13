import { UserProfile } from '@/types/reduxStateType';
import { UserActionType } from '../types.action';

interface UserProfileAction {
  type: UserActionType.SET_USER_PROFILE;
  payload?: UserProfile;
}

interface ClearUserProfileAction {
  type: UserActionType.CLEAR_USER_PROFILE;
  payload?: null;
}

export type ProfileAction = UserProfileAction | ClearUserProfileAction;
