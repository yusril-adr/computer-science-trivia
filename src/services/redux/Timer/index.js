import { createSlice } from '@reduxjs/toolkit';

// Configuration
import CONFIG from '../../../global/CONFIG';

// Services
import Timer from '../../localStorage/Timer';

const initialState = {
  value: CONFIG.TRIVIA_TIME,
};

export const timerSlicer = createSlice({
  name: 'timer',
  initialState: Timer.getTimer() || initialState,
  reducers: {
    resetTimer: () => {
      Timer.cleatTimer();

      return initialState;
    },
    setTimer: (state, { payload: currentTime }) => {
      Timer.saveTimer(currentTime);

      return {
        value: currentTime,
      };
    },
  },
});

export const {
  resetTimer,
  setTimer,
} = timerSlicer.actions;

export default timerSlicer.reducer;
