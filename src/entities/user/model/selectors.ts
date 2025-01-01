import { UserState } from "@/entities/user/model/types";
import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
  (state) => state,
  (state) => state.user
);

export const selectUser = createSelector(
  selectBase,
  (state: UserState) => state.user
);
