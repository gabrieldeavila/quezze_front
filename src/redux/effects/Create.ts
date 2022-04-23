import { Create } from "./../interfaces/Create";
import { Dispatch } from "react";
import { CreateActionTypes } from "../types/CreateType";
import { setCreateAction } from "../actions/CreateActions";

export const setCreate = (updateValues: Create) => {
  return function (dispatch: Dispatch<CreateActionTypes>) {
    dispatch(setCreateAction(updateValues));
  };
};
