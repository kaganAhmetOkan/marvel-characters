import './globals.css';
import Header from '@/components/Header/Header';

export const metadata = {
  title: 'Marvel Characters',
  description: 'Search your favorite Marvel heroes and villains!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
