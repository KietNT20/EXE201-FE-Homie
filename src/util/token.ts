import { STORAGE } from '@/constant/storage';

interface Token {
  token?: string;
}

export const localToken = {
  get: (): Token =>
    JSON.parse(localStorage.getItem(STORAGE.token) || '{}') as Token,
  set: (token?: unknown) =>
    localStorage.setItem(STORAGE.token, JSON.stringify(token)),
  remove: () => localStorage.removeItem(STORAGE.token),
};
const tokenMethod = {
  get: () => {
    return localToken.get();
  },
  set: (token?: unknown) => {
    // console.log('token', token);
    localToken.set(token);
  },
  remove: () => {
    localToken.remove();
  },
};

export default tokenMethod;
