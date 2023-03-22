import { RootState } from "..";

export const isAuthSelector = (state: RootState) => !!state.user.token;
