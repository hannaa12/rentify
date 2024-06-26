import '@/assets/styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import AuthProvider from './components/AuthProvider';

export const metadata = {
    title : 'Rentify | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rentals, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
    <html lang = 'en'>
        <body>
        <Navbar/>
            <main>{children}</main>
            <Footer/>
        </body>
    </html>
    </AuthProvider>
  )
}

export default MainLayout;