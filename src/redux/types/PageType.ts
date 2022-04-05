import { Page } from "../interfaces/Page";

export const SET_CURR_PAGE = "SET_CURR_PAGE";

export interface SetCurrPageStateType {
  page: Page;
}

interface SetCurrPageActionType {
  type: typeof SET_CURR_PAGE;
  payload: Page;
}

export type CurrPageActionTypes = SetCurrPageActionType;
