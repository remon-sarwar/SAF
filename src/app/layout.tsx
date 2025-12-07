import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin', 'latin-ext']
});

export const metadata: Metadata = {
  title: 'Sofia Alauddin Foundation',
  description: 'A community of hearts working to make life a little brighter.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
