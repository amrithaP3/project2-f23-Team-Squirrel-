import '@/styles/globals.css'
import { AuthProvider } from '@/hooks/useAuth'
import SearchHeaderComponent from '@/components/SearchHeaderComponent.js'
import HeaderComponent from '@/components/HeaderComponent';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}