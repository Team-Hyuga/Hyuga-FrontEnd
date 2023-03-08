import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Sidebar from "./Components/Sidebar";
import MainPage from "./Pages/Main";
import MainDetailPage from "./Pages/MainDetail";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import ResetPasswordPage from "./Pages/ResetPassword";
import MyPage from "./Pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/main">
          <Route index element={<MainPage />} />
          <Route path=":id" element={<MainDetailPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
