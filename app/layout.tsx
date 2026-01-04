import type { Metadata } from 'next';
import { Orbitron, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Global Flight Group - U.S. Aircraft Acquisition & Worldwide Export',
  description: 'Professional aircraft acquisition, verification, and international export services. We source, verify, escrow, and deliver U.S. civilian aircraft worldwide with complete documentation and regulatory compliance.',
  keywords: 'aircraft acquisition, aircraft export, international aviation, U.S. aircraft, ferry delivery, aircraft escrow, aviation services, business jets, military aircraft, worldwide delivery',
  authors: [{ name: 'Global Flight Group' }],
  openGraph: {
    title: 'Global Flight Group - U.S. Aircraft Acquisition & Worldwide Export',
    description: 'Professional aircraft acquisition and international export services. Complete verification, escrow protection, and worldwide ferry delivery.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${orbitron.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        {/* EmailJS Script - Optional */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          async
        />
      </head>
      <body className="antialiased font-inter">
        {children}
      </body>
    </html>
  );
}

