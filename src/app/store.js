import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import LandingPageReducer from '../features/LandingPage/LandingPageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    LandingPage:LandingPageReducer
  },
});
