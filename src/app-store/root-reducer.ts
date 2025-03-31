import { combineReducers } from "@reduxjs/toolkit";
import { withdrawalReducer } from "../components/withdrawal/withdrawal-slice";

const rootReducer = combineReducers({
  withdrawal: withdrawalReducer,
});

export { rootReducer };

export type StoreRootState = ReturnType<typeof rootReducer>;
