import { QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import './assets/scss/style.scss';
import AppRoutes from './routes/AppRoutes';
export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          success: {
            style: {
              // padding: "25px",
              // color: "#fff",
              // fontSize: "1.4rem",
              // backgroundColor: "#4caf50",
            },
          },
          error: {
            style: {
              // padding: "25px",
              // color: "#fff",
              // fontSize: "1.4rem",
              // backgroundColor: "#e25454",
            },
          },
        }}
      />
    </>
  );
}

export default App;
