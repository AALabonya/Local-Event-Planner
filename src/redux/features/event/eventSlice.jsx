import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  events: [],
  userSpecificTasks: [],
};

const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;