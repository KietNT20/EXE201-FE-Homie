import { PATH } from "@/constant/path";
import MainLayout from "@/layout/MainLayout";
import AboutPage from "@/pages/AboutPage/AboutPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import PaymentPage from "@/pages/PaymentPage/PaymentPage";
import ServicePage from "@/pages/Service/ServicePage";
import PartnerPage from "@/pages/partnerPage/PartnerPage";
import CommitPage from "@/pages/CommitPage/CommitPage";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PATH.ABOUT} element={<AboutPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.REGISTER} element={<RegisterPage />} />
        <Route path={PATH.PAYMENT} element={<PaymentPage />} />
        <Route path={PATH.SERVICE} element={<ServicePage />} />
        <Route path={PATH.PARTNER} element={<PartnerPage />} />
        <Route path={PATH.COMMITMENT} element={<CommitPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
