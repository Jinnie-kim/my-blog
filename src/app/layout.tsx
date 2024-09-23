import Navigation from '@/components/navigation';
import '../app/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'HEEJIN☁️WORLD✨',
    template: '%s | HEEJIN☁️WORLD✨',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
