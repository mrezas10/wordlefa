import { createSlice } from "@reduxjs/toolkit";

export const NewWordSlice = createSlice({
  name: "words",
  initialState: {
    date: 1650610800000,
    index: 0,
    totalSolved: 0,
    totalFailed: 0,
    streak: 0,
    maxStreak: 0,
    guesscount: [0, 0, 0, 0, 0, 0],
  },
  reducers: {
    updateIndex: (state, action) => {
      state.index = action.payload.newIndex;
    },
    updateSolved: (state) => {
      state.totalSolved++;
      state.streak++;
      state.maxStreak = Math.max(state.maxStreak, state.streak);
    },
    updateFailed: (state) => {
      state.totalFailed++;
      state.streak = 0;
    },
    resetStreak: (state) => {
      state.streak = 0;
    },
    updateGuess: (state, action) => {
      state.guesscount[action.payload.index]++;
    },
  },
});

export const {
  updateIndex,
  updateSolved,
  updateFailed,
  resetStreak,
  updateGuess,
} = NewWordSlice.actions;
export default NewWordSlice.reducer;
