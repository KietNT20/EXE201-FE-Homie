import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import { PATH } from '@/constant/path';
import MainLayout from '@/layout/MainLayout';
import AboutPage from '@/pages/AboutPage/AboutPage';
import CommitPage from '@/pages/CommitPage/CommitPage';
import HomePage from '@/pages/HomePage/HomePage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import NewPage from '@/pages/NewsPage/NewsPage'; // Corrected path
import PartnerPage from '@/pages/partnerPage/PartnerPage';
import PaymentPage from '@/pages/PaymentPage/PaymentPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import ServicePage from '@/pages/ServicePage/ServicePage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PATH.ABOUT} element={<AboutPage />} />
        <Route path={PATH.REGISTER} element={<RegisterPage />} />
        <Route path={PATH.PAYMENT} element={<PaymentPage />} />
        <Route path={PATH.SERVICE} element={<ServicePage />} />
        <Route path={PATH.PARTNER} element={<PartnerPage />} />
        <Route path={PATH.COMMITMENT} element={<CommitPage />} />
        <Route path={PATH.NEWS} element={<NewPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={PATH.PAYMENT} element={<PaymentPage />} />
          <Route path={PATH.SERVICE} element={<ServicePage />} />
        </Route>
        <Route path={PATH.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
