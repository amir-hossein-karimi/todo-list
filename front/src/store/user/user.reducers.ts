import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginActionType, userSliceType } from "./types";

const initialState: userSliceType = {
  username: "",
  token: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<loginActionType>) {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.username = "";
      state.token = "";
      state.refreshToken = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
