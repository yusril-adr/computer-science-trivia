import { configureStore } from '@reduxjs/toolkit';

// Reducers from Slice
import UserReducer from './User';
import TriviaReducer from './Trivia';
import TimerReducer from './Timer';

const store = configureStore({
  reducer: {
    user: UserReducer,
    trivia: TriviaReducer,
    timer: TimerReducer,
  },
});

export default store;
