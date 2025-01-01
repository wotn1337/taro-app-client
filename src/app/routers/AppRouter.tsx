import { LoginPage } from "@/pages/login";
import { MainPage } from "@/pages/main";
import { RegisterPage } from "@/pages/register";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

type Props = {};

export const AppRouter: FC<Props> = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
