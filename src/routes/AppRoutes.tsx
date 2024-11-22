import Loading from '@/components/Loading/Loading';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { PATH } from '@/constant/path';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load all pages
const MainLayout = lazy(() => import('@/layout/MainLayout'));
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
const TransactionPage = lazy(
  () => import('@/pages/TransactionPage/TransactionPage'),
);
const AppliedPage = lazy(() => import('@/pages/AppliedPage/AppliedPage'));
const JobListCreated = lazy(
  () => import('@/pages/ServicePage/JobPostList/JobListCreated'),
);
const PageNotFound = lazy(() => import('@/pages/PageNotFound/PageNotFound'));
const PrivateRoute = lazy(
  () => import('@/components/PrivateRoute/PrivateRoute'),
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
                path={PATH.APPLIED}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <AppliedPage />
                  </Suspense>
                }
              />
              <Route
                path={PATH.JOB_USER}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <JobListCreated />
                  </Suspense>
                }
              />
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
              <Route
                path={PATH.TRANSACTION}
                element={
                  <Suspense fallback={<PageLoadingFallback />}>
                    <TransactionPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
