import { CreateInterface } from "../interfaces/Create";

export const SET_CREATE = "SET_CREATE";

export interface SetCreateStateType {
  create: CreateInterface;
}

interface SetCreateActionType {
  type: typeof SET_CREATE;
  payload: CreateInterface;
}

export type CreateActionTypes = SetCreateActionType;
