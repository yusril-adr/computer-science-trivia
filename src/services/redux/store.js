import { configureStore } from '@reduxjs/toolkit';

// Reducers from Slice
import UserReducer from './User';

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
