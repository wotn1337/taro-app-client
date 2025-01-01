export type User = {
  id: string;
  documentId: string;
  username: string;
  email: string;
};

export type UserState = { user?: User };

export type RegisterUserData = Pick<User, "username" | "email"> & {
  password: string;
};

export type LoginUserData = {
  identifier: string;
  password: string;
};
