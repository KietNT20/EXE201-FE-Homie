import { PATH } from "@/constant/path";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
