import Loading from '@/components/Loading/Loading';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { PATH } from '@/constant/path';
import MainLayout from '@/layout/MainLayout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load all pages
const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage/RegisterPage'));
const PaymentPage = lazy(() => import('@/pages/PaymentPage/PaymentPage'));
const PartnerPage = lazy(() => import('@/pages/partnerPage/PartnerPage'));
const CommitPage = lazy(() => import('@/pages/CommitPage/CommitPage'));
const NewPage = lazy(() => import('@/pages/NewsPage/NewsPage'));
const ServicePage = lazy(() => import('@/pages/ServicePage/ServicePage'));
const ServiceDetail = lazy(
  () => import('@/pages/ServicePage/ServiceDetail/ServiceDetail'),
);
const ProfileEmployeePage = lazy(
  () => import('@/pages/ProfileEmployeePage/ProfileEmployeePage'),
);

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loading />
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path={PATH.HOME} element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <HomePage />
                </Suspense>
              }
            />

            {/* Public Routes */}
            <Route
              path={PATH.ABOUT}
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path={PATH.REGISTER}
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <RegisterPage />
                </Suspense>
              }
            />
            <Route
              path={PATH.PARTNER}
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <PartnerPage />
                </Suspense>
              }
            />
            <Route
              path={PATH.COMMITMENT}
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <CommitPage />
                </Suspense>
              }
            />
            <Route
              path={PATH.NEWS}
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <NewPage />
                </Suspense>
              }
            />
            <Route
              path={PATH.LOGIN}
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LoginPage />
                </Suspense>
              }
            />

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path={PATH.PAYMENT}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <PaymentPage />
                  </Suspense>
                }
              />
              <Route
                path={PATH.SERVICE}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <ServicePage />
                  </Suspense>
                }
              />
              <Route
                path={PATH.SERVICE_DETAIL}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <ServiceDetail />
                  </Suspense>
                }
              />

              <Route
                path={PATH.PROFILE_EMPLOYEE}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <ProfileEmployeePage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
