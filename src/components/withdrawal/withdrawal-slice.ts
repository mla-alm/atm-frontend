import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DenominationResponse } from "../../client/withdrawal-client";

export interface WithdrawalState {
  readyCash: DenominationResponse[];
}

const initialState: WithdrawalState = {
  readyCash: [],
};

export const withdrawalSlice = createSlice({
  name: "withdrawal",
  initialState,
  reducers: {
    setReadyCash: (state, action: PayloadAction<DenominationResponse[]>) => {
      state.readyCash = action.payload;
    },
    takeCash: (state) => {
      state.readyCash = [];
    },
  },
});

export const { setReadyCash, takeCash } = withdrawalSlice.actions;

export const withdrawalReducer = withdrawalSlice.reducer;
