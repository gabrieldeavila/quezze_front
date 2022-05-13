import { CreateInterface } from "../interfaces/Create";
import { CreateActionTypes } from "../types/CreateType";
import { SET_CREATE } from "./../types/CreateType";

const initialStateSetCreate = {
  name: "",
  type: -1,
  description: "",
  thumbnail: "",
};

export const setCreateReducer = (
  state = initialStateSetCreate,
  action: CreateActionTypes
): CreateInterface => {
  switch (action.type) {
    case SET_CREATE:
      return action.payload;
    default:
      return state;
  }
};
