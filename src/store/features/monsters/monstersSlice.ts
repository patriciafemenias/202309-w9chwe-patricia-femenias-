import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MonsterStructure, MonstersStateStructure } from "./types";

export const initialMonstersState: MonstersStateStructure = {
  monsters: [],
};

const monstersSlice = createSlice({
  name: "monsters",
  initialState: initialMonstersState,
  reducers: {
    loadMonsters: (
      currentState,
      action: PayloadAction<MonsterStructure[]>,
    ) => ({
      ...currentState,
      monsters: action.payload.map((monster) => ({ ...monster })),
    }),
  },
});

export const monstersReducer = monstersSlice.reducer;
export const { loadMonsters } = monstersSlice.actions;
export const { loadMonsters: loadMonstersActionCreator } =
  monstersSlice.actions;
