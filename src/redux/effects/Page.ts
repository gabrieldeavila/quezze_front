import { Dispatch } from "react";
import { CurrPageActionTypes } from "../types/PageType";
import { setCurrPageAction } from "../actions/PageActions";

export const setCurrPage = (newPage: string) => {
  return function (dispatch: Dispatch<CurrPageActionTypes>) {
    dispatch(setCurrPageAction({ name: newPage }));
  };
};
