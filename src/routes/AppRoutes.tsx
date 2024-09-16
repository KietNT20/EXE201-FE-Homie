import { PATH } from "@/constant/path";
import MainLayout from "@/layout/MainLayout";
import AboutPage from "@/pages/AboutPage/AboutPage";
import HomePage from "@/pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PATH.ABOUT} element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
