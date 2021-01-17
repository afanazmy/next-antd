import type from "./type";

export default {
  changeTheme: (theme) => ({
    type: type.changeTheme.request,
    payload: { theme },
  }),
};
