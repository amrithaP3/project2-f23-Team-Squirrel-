import '@/styles/globals.css'
import { AuthProvider } from '@/hooks/useAuth'

import HeaderComponent from '@/components/HeaderComponent';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <HeaderComponent />
      <Component {...pageProps} />
    </AuthProvider>
  )
}