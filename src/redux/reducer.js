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
  },
});

export const { updateWord, acceptWord } = WordsSlice.actions;
export default WordsSlice.reducer;
