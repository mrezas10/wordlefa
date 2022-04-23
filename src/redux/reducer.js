import { createSlice } from "@reduxjs/toolkit";

export const WordsSlice = createSlice({
  name: "words",
  initialState: [
    { word: "", accepted: false },
    { word: "", accepted: false },
    { word: "", accepted: false },
    { word: "", accepted: false },
    { word: "", accepted: false },
    { word: "", accepted: false },
  ],
  reducers: {
    updateWord: (state, action) => {
      state[action.payload.index].word = action.payload.newWord;
    },
    acceptWord: (state, action) => {
      state[action.payload.index].accepted = true;
    },
    successful: (state) => {
      state.forEach((item) => (item.accepted = true));
    },
    resetAll: (state) => {
      state.forEach((item) => {
        item.word = "";
        item.accepted = false;
      });
    },
  },
});

export const { updateWord, acceptWord, successful, resetAll } =
  WordsSlice.actions;
export default WordsSlice.reducer;
