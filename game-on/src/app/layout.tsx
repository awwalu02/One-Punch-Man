
import './styles/globals.css';
import './styles/layout.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: {
    template: "%s | One Punch Man: The Game "
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
        <Navbar />
        <main className='main-content'>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}