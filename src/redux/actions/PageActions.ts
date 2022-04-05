import { CurrPageActionTypes } from "../types/PageType";
import { Page } from "./../interfaces/Page";
import { SET_CURR_PAGE } from "./../types/PageType";

export const setCurrPageAction = (page: Page): CurrPageActionTypes => {
  return {
    type: SET_CURR_PAGE,
    payload: page,
  };
};
