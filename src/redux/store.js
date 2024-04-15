import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import eventSlice from './features/event/eventSlice';

const store = configureStore({
  reducer: {
    eventSlice: eventSlice,
    userSlice: userSlice
  },
});

export default store;