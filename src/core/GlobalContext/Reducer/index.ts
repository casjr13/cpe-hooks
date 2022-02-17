import { Action } from "./actions";

export type GlobalState = {
  light: boolean,
  image?: string,
};

export const initialState: GlobalState = {
  light: true,
  image: undefined,
};

export const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "TOGGLE THEME":
      return {
        ...state,
        light: !state.light,
      };
    case "UPDATE IMAGE":
      return {
        ...state,
        image: action.image,
      };
    case "RESET THEME":
      return {
        ...state,
        light: true,
        image: undefined,
      }
    default:
      return state;
  }
}