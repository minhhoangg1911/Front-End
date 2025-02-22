import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ToastContainer
        closeOnClick={true}
        pauseOnHover={false}
        theme="light"
      />
      <App />
    </StrictMode>
  </QueryClientProvider>

)
