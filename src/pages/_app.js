import '@/styles/globals.css'
import { AuthProvider } from '@/hooks/useAuth'
import { useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}