import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home/LandingPage";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import SettingsPage from "./pages/settings/SettingsPage";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<SettingsPage />} />
        </Route>
        {/* باقي الصفحات */}
      </Routes>
    </>
  );
}

export default App;
