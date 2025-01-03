export { useLoginMutation, userApi, useRegisterMutation } from "./api/userApi";
export { selectUser } from "./model/selectors";
export type {
  LoginUserData,
  RegisterUserData,
  User,
  UserState,
} from "./model/types";
export { setUser, default as userReducer } from "./model/userSlice";
