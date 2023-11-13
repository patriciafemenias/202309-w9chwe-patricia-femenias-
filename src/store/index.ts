import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { monstersReducer } from "./features/monsters/monstersSlice";

export const store = configureStore({
  reducer: { monstersState: monstersReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
