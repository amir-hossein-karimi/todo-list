import { rootReducerInterface as stateType } from "../reducers";

export const authSelector = (state: stateType) => state.user.token;

export const userSelector = (state: stateType) => state.user;
