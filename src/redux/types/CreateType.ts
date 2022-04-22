import { Create } from "../interfaces/Create";

export const SET_CREATE = "SET_CREATE";

export interface SetCreateStateType {
  create: Create;
}

interface SetCreateActionType {
  type: typeof SET_CREATE;
  payload: Create;
}

export type CreateActionTypes = SetCreateActionType;
