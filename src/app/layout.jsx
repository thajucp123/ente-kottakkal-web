import TopAppBar from '@/components/layout/TopAppBar';
import BottomNavBar from '@/components/layout/BottomNavBar';
import './globals.css';

export const metadata = {
  title: 'എന്റെ കോട്ടയ്ക്കൽ',
  description: 'ഡിജിറ്റൽ ഗ്രാമസഭയുടെ പുതിയ മുഖം.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ml">
      <body className="min-h-screen bg-surface flex justify-center selection:bg-primary selection:text-white antialiased">
        <div className="w-full max-w-md bg-surface min-h-screen flex flex-col relative shadow-2xl">
          <TopAppBar />
          
          <main className="flex-1 pt-20 pb-24 px-4 overflow-x-hidden">
            {children}
          </main>

          <BottomNavBar />
        </div>
      </body>
    </html>
  );
}
