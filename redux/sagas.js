import { all } from "redux-saga/effects";

import dashAppSagas from "./dashApp/saga";

export default function* rootSaga() {
  yield all([dashAppSagas()]);
}
