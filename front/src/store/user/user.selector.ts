import { rootReducerInterface as stateType } from "../reducers";

export const authSelector = (state: stateType) =>
  state.user.token !== undefined;
