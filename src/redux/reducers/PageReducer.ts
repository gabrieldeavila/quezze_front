import {
  SET_CURR_PAGE,
  SetCurrPageStateType,
  CurrPageActionTypes,
} from "../types/PageType";

const initialStateGetPage: SetCurrPageStateType = {
  page: { name: "home" },
};

export const setCurrPageReducer = (
  state = initialStateGetPage,
  action: CurrPageActionTypes
): SetCurrPageStateType => {
  switch (action.type) {
    case SET_CURR_PAGE:
      return {
        page: action.payload,
      };
    default:
      return state;
  }
};
