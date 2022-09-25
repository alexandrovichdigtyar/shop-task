import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';

const rootReducer = combineReducers({
  productsReducer: productsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
