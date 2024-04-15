import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    events: [], 
    userSpecificTasks: [],
  };

const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState,
  reducers: {
    addEvent: (state, { payload }) => {
      state.events.push({ ...payload });
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
