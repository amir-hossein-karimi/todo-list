import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./user/user.reducers";
import { userSliceType } from "./user/types";

export const rootReducers = combineReducers({
  user: userReducers,
});

export interface rootReducerInterface {
  user: userSliceType;
}
