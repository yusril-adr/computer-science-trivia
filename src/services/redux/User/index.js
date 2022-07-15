import { createSlice } from '@reduxjs/toolkit';

// Services
import Token from '../../localStorage/Token';

const initialState = {
  value: Token.getToken() ? true : null,
};

export const useSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, { payload: newUser }) => ({
      value: newUser,
    }),
  },
});

export const {
  updateUser,
} = useSlicer.actions;

export default useSlicer.reducer;
