import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';
import TopNav from '@/components/navigation/TopNav';

export default function PublicLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className='mt-[144px]'>{children}</main>
      <Footer />
    </>
  );
}
