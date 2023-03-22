import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginActionType, userSliceType } from "./types";

const initialState: userSliceType = {
  username: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<loginActionType>) {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },

    logout(state, action: PayloadAction<undefined>) {
      state.username = "";
      state.token = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
