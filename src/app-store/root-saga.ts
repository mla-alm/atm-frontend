import { takeLatest } from "redux-saga/effects";
import { withdrawalAction } from "../components/withdrawal/withdrawal-action";
import { withdrawalSaga } from "../components/withdrawal/withdrawal-saga";

function* rootSaga() {
  yield takeLatest(withdrawalAction.type, withdrawalSaga);
}

export { rootSaga };
