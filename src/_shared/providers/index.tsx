'use client'
import { ToastContainer } from "react-toastify";
import { Providers as SessionProvider } from "./sessionProvider";
import { ProvidersQuery } from "./queryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <SessionProvider>
          <ProvidersQuery>  
            {children}
          </ProvidersQuery>
        <ToastContainer />
      </SessionProvider>
  );
}
