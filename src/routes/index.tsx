import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { AnnoucerPage } from "../pages/annoucerPage";
import { MyAnnouncementsPage } from "../pages/myAnnouncements";
import { AnnouncementPage } from "../pages/announcementPage";
import { SendMail } from "../pages/sendmailPage";
import { RecoveryPassword } from "../pages/recoverypassword";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/announcer/:userId" element={<AnnoucerPage />} />
      <Route
        path="/myannouncements/:userId"
        element={<MyAnnouncementsPage />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/sendmail" element={<SendMail />} />
      <Route path="/recoverypassword/:token" element={<RecoveryPassword />} />
      <Route
        path="/announcement-page/announcement/:announcementId"
        element={<AnnouncementPage />}
      />
    </Routes>
  );
};
