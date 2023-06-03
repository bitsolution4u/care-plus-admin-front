import './globals.css';
import { Inter } from 'next/font/google';
import LeftSideDrawer from '@/components/left-side-drawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftSideDrawer>{children}</LeftSideDrawer>
      </body>
    </html>
  );
}
