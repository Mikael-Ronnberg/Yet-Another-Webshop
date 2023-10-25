export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADD_ITEM,
  REMOVE_ITEM,
}
