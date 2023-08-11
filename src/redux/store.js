import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import gameReducer from './slices/game';

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
});
