import { createSlice } from '@reduxjs/toolkit';

// Thunk
import { startTrivia } from './thunk';

// Services
import Trivia from '../../localStorage/Trivia';

const initialState = {
  list: [],
  currentNumber: 1,
  isLoading: false,
};

export const triviaSlicer = createSlice({
  name: 'trivia',
  initialState: Trivia.getTrivias() || initialState,
  reducers: {
    resetTrivia: () => {
      Trivia.clearTrivias();

      return initialState;
    },
    updateTriviaAnswer: (state, { payload: updatedList }) => {
      const newTriviaState = {
        ...state,
        currentNumber: state.currentNumber + 1,
        list: updatedList,
      };

      Trivia.saveTrivias(newTriviaState);

      return newTriviaState;
    },
  },
  extraReducers: {
    [startTrivia.pending]: (state) => ({ ...state, isLoading: true }),
    [startTrivia.fulfilled]: (state, { payload: list }) => {
      const newTriviaState = {
        ...state,
        list,
        isLoading: false,
        error: null,
      };

      Trivia.saveTrivias(newTriviaState);

      return newTriviaState;
    },
    [startTrivia.rejected]: (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
});

const {
  resetTrivia,
  updateTriviaAnswer,
} = triviaSlicer.actions;

export {
  resetTrivia,
  updateTriviaAnswer,
  startTrivia,
};

export default triviaSlicer.reducer;
