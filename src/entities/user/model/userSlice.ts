import { userApi } from "@/shared/api/userApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User, UserState } from "./types";

const savedUser = localStorage.getItem("user");
const initialState: UserState = {
  user: savedUser ? JSON.parse(savedUser) : undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem("jwt", payload.jwt);
        localStorage.setItem("user", JSON.stringify(payload.user));
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem("jwt", payload.jwt);
        localStorage.setItem("user", JSON.stringify(payload.user));
        state.user = payload.user;
      }
    );
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
