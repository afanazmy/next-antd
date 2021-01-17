import { all, put, takeLatest } from "redux-saga/effects";
import type from "./type";

export function* changeTheme({ payload }) {
  const { theme } = payload;

  yield put({
    type: type.changeTheme.success,
    theme,
  });
}

export default function* rootSaga() {
  yield all([yield takeLatest(type.changeTheme.request, changeTheme)]);
}
