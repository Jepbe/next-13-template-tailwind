import './ui/globals.css';
import { Kanit } from 'next/font/google'


const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600'],
  subsets: ['latin'],
})

export default function DashboardLayout({ children }) {

  return ( 
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html> 
    );
}