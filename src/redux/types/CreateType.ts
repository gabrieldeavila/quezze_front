import { CreateInterface } from "../interfaces/Create";

export const SET_CREATE = "SET_CREATE";

interface SetCreateActionType {
  type: typeof SET_CREATE;
  payload: CreateInterface;
}

export type CreateActionTypes = SetCreateActionType;
