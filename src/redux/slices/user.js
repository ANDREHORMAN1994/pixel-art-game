import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
  email: '',
  imgGravatar: 'https://www.gravatar.com/avatar/',
  score: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      const { name, email } = action.payload;
      return { ...state, name, email };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
