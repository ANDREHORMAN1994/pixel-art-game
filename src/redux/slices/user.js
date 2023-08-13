import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
  email: '',
  imgGravatar: 'https://www.gravatar.com/avatar/',
  score: 0,
  assertions: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    setScore: (state, { payload }) => ({
      ...state,
      score: state.score + payload,
    }),
  },
});

export const { setUser, setScore } = userSlice.actions;

export default userSlice.reducer;
