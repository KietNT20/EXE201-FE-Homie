const APPLICATION = '/Application';
const AUTH = '/Auth';
const E_WALLET = '/EWallet';
const JOB_POST = '/JobPost';
const PROFILES = '/Profiles';
const USER = '/User';

export const API = {
  APPLICATION_API: {
    CREATE: APPLICATION + '/CreateApplication',
    UPDATE_STATUS: APPLICATION + '/UpdateStatus/',
  },
  AUTH_API: {
    LOGIN: AUTH + '/login',
    GET_USER_BY_TOKEN: AUTH + '/login/get-user-by-token/',
  },
  E_WALLET_API: {
    GET_BY_USER_ID: E_WALLET + '/GetWalletByUserID/',
    ADD_MONEY: E_WALLET + '/AddMoney',
  },
  JOB_POST_API: {
    CREATE: JOB_POST + '/Create',
    GET_ALL: JOB_POST + '/GetAll',
    GET_BY_ID: JOB_POST + '/getById/',
  },
  PROFILES_API: {
    GET_PROFILES: PROFILES + '/getProfiles/',
    UPDATE: PROFILES + '/UpdateProfiles/',
    CREATE: PROFILES + '/CreateProfiles',
  },
  USER_API: {
    GET_ALL: USER + '/getAllUser',
    GET_BY_ID: USER + '/getById',
    CREATE: USER + '/create',
    UPDATE: USER + '/update',
    GET_USER_BY_TOKEN: USER + '/get-user-by-token/',
  },
  CATEGORY_API: {
    GET_ALL: '/Category/getAll',
    GET_BY_ID: '/Category/getById',
  },
};
