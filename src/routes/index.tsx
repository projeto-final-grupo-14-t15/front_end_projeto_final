import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Product } from "../pages/product";
import { UserDash } from "../pages/userDash";
import { AnnoucerPage } from "../pages/annoucerPage";
import { MyAnnouncementsPage } from "../pages/myAnnouncements";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/announcer/:userId" element={<AnnoucerPage />} />
      <Route path="/myannouncements/:userId" element={<MyAnnouncementsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/userDash" element={<UserDash />} />
    </Routes>
  );
};
