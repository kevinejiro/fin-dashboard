import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice.ts';
import cardsReducer from './features/cardsSlice.ts';
import transactionsReducer from './features/transactionsSlice.ts';
import dashboardDataReducer from './features/dashboardDataSlice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
    transactions: transactionsReducer,
    dashboardData: dashboardDataReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;