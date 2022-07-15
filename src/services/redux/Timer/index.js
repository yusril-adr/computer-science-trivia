import { createSlice } from '@reduxjs/toolkit';

// Configuration
import CONFIG from '../../../global/CONFIG';

// Services
import Timer from '../../localStorage/Timer';

const initialState = {
  value: Timer.getTimer() || CONFIG.TRIVIA_TIME,
};

export const timerSlicer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    resetTimer: () => {
      Timer.clearTimer();

      return initialState;
    },
    setTimer: (state, { payload: currentTime }) => {
      if (currentTime <= 0) {
        Timer.saveTimer(0);
        return {
          value: 0,
        };
      }

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
