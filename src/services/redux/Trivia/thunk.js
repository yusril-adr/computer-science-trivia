import { createAsyncThunk } from '@reduxjs/toolkit';

// Services
import Trivia from '../../api/Trivia';

// eslint-disable-next-line import/prefer-default-export
export const startTrivia = createAsyncThunk(
  'trivia/startTrivia',
  // eslint-disable-next-line consistent-return
  async () => (Trivia.getTrivias()),
);
