import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userProfileReducer from './reducers/userProfileReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const customizedMiddleware = {
  serializableCheck: false,
};

const rootReducer = combineReducers({
  // Add your reducers here
  profile: userProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(customizedMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
export default store;
