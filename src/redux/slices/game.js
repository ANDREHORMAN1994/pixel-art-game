import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  pixelColors: [],
  currentTimer: 60,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: INITIAL_STATE,
  reducers: {
    incrementPixelColor: (state, { payload }) => {
      if (state.pixelColors.some(({ id }) => id === payload.id)) {
        const index = state.pixelColors.findIndex(({ id }) => id === payload.id);
        state.pixelColors[index] = payload;
        return;
      }
      state.pixelColors.push(payload);
    },
    updateTimer: (state, { payload }) => {
      state.currentTimer = payload;
    },
  },
});

export const { incrementPixelColor, updateTimer } = gameSlice.actions;

export default gameSlice.reducer;
