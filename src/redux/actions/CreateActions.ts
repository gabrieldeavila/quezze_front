import { CreateActionTypes, SET_CREATE } from "./../types/CreateType";
import { CreateInterface } from "./../interfaces/Create";

export const setCreateAction = (create: CreateInterface): CreateActionTypes => {
  return {
    type: SET_CREATE,
    payload: create,
  };
};
