import { createSlice } from "@reduxjs/toolkit";

export const DisplayPopUpSlice = createSlice({
  name: "displayPopUp",
  initialState: {
    help: false,
    stats: false,
  },
  reducers: {
    ToggleStats: (state) => {
      state.stats = !state.stats;
    },
    ToggleHelp: (state) => {
      state.help = !state.help;
    },
  },
});

export const { ToggleHelp, ToggleStats } = DisplayPopUpSlice.actions;
export default DisplayPopUpSlice.reducer;
