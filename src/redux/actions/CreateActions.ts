import { CreateActionTypes, SET_CREATE } from "./../types/CreateType";
import { Create } from "./../interfaces/Create";

export const setCreateAction = (create: Create): CreateActionTypes => {
  return {
    type: SET_CREATE,
    payload: create,
  };
};
