import { Outlet } from '@remix-run/react';
import Footer from '~/client/components/shared/Footer';
import Navbar from '~/client/components/shared/Navbar';

export default function HomeLayout() {
  return (
    <div className=''>
      <nav className="container mx-auto">
        <Navbar smallLogo="/tabLogo.png" logoPath="/logo.png" />
      </nav>
      <main className='min-h-[300px]'>
        <Outlet />
      </main>
      <div className='border-t-2 max-w-7xl mx-auto'>
        <Footer smallLogo="/tabLogo.png" logoPath="/logo.png" />
      </div>
    </div>
  );
}

export function links() {
  return [];
}
