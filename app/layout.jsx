import '@/assets/styles/globals.css';
import Navbar from './components/navbar';

export const metadata = {
    title : 'Rentify | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rentals, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang = 'en'>
        <body>
        <Navbar/>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout;