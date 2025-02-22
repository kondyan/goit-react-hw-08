import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },
  reducers: {
    setContactFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setContactFilter } = slice.actions;

export default slice.reducer;
