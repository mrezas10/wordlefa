import { createSlice } from "@reduxjs/toolkit";

export const NewWordSlice = createSlice({
  name: "words",
  initialState: {
    date: new Date("April 22, 2022 00:00:00"),
    index: 0,
    totalSolved: 0,
    totalFailed: 0,
    streak: 0,
  },
  reducers: {
    updateIndex: (state, action) => {
      state.index = action.payload.newIndex;
    },
    updateSolved: (state) => {
      state.totalSolved++;
      state.streak++;
    },
    updateFailed: (state) => {
      state.totalFailed++;
      state.streak = 0;
    },
    resetStreak: (state) => {
      state.streak = 0;
    },
  },
});

export const { updateIndex, updateSolved, updateFailed, resetStreak } =
  NewWordSlice.actions;
export default NewWordSlice.reducer;
