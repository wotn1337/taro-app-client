import type { LoginUserData, RegisterUserData, User } from "@/entities/user";
import { baseApi } from "./baseApi";

type AuthResponse = {
  jwt: string;
  user: User;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterUserData>({
      query: (body) => ({
        url: "/auth/local/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<AuthResponse, LoginUserData>({
      query: (body) => ({
        url: "/auth/local",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
