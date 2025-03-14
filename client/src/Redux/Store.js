import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/User.Slice';

export const store = configureStore({
  reducer: {
    User: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
