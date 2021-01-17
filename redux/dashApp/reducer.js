import type from "./type";

const initState = {
  theme: "dark",
};

export default function dashApp(state = initState, action) {
  switch (action.type) {
    case type.changeTheme.success:
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
}
