import { PayloadAction } from "@reduxjs/toolkit";
import WithdrawalClient, {
  DenominationResponse,
} from "../../client/withdrawal-client";
import { put } from "redux-saga/effects";
import { setReadyCash } from "./withdrawal-slice";

export function* withdrawalSaga(action: PayloadAction<number>) {
  try {
    const client = new WithdrawalClient();

    const response: DenominationResponse[] = yield client.withdraw(
      action.payload
    );

    yield put(setReadyCash(response));
  } catch (error) {
    // ToDo: Add better error handling
    console.error("Error in withdrawalSaga", error);
  }
}
