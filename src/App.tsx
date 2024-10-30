import { QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import './assets/scss/style.scss';
import AppRoutes from './routes/AppRoutes';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

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
              fontSize: '1rem',
            },
          },
          error: {
            style: {
              fontSize: '1rem',
            },
          },
        }}
      />
    </>
  );
}

export default App;
