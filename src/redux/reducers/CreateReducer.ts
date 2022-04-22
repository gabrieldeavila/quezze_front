import { CreateActionTypes, SetCreateStateType } from "../types/CreateType";
import { SET_CREATE } from "./../types/CreateType";

const initialStateSetCreate = {
  create: {
    name: "",
    type: "",
    description: "",
    thumbnail: "",
  },
};

export const setCreateReducer = (
  state = initialStateSetCreate,
  action: CreateActionTypes
): SetCreateStateType => {
  switch (action.type) {
    case SET_CREATE:
      return {
        create: action.payload,
      };
    default:
      return state;
  }
};
