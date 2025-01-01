import { selectUser } from "@/entities/user";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute: FC<Props> = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to="login" />;
  }

  return children;
};
