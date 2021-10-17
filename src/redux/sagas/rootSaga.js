import { takeLatest, takeEvery } from "redux-saga/effects";
import { GET_USER } from "../ducks/user";
import { handleGetUsers } from "./handlers/user";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUsers);
}
