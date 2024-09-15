// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/Register/Register";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
