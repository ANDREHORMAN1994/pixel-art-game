import { createSlice } from '@reduxjs/toolkit';
import { readLocalStorage } from '../../utils/localStorage';

const LAST_INDEX = -1;
const localRanking = readLocalStorage('pixelRanking') || [];
const userInfos = localRanking.at(LAST_INDEX);

const INITIAL_STATE = {
  name: userInfos ? userInfos.name : '',
  email: userInfos ? userInfos.email : '',
  imgGravatar: userInfos ? userInfos.imgGravatar : 'https://www.gravatar.com/avatar/',
  score: userInfos ? userInfos.score : 0,
  assertions: userInfos ? userInfos.assertions : 0,
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
    setAssertions: (state) => ({
      ...state,
      assertions: state.assertions + 1,
    }),
    reset: () => ({
      name: '',
      email: '',
      imgGravatar: 'https://www.gravatar.com/avatar/',
      score: 0,
      assertions: 0,
    }),
  },
});

export const { setUser, setScore, setAssertions, reset } = userSlice.actions;

export default userSlice.reducer;
