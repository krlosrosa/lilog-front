'use client'
import { Providers as SessionProvider } from "./sessionProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <SessionProvider>
        {children}
      </SessionProvider>
  );
}
