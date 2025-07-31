import Link from 'next/link';
import { MainNav } from './main-nav';
import { EwolynLogo } from '../ewolyn-logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-cyan text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-2">
          <EwolynLogo className="h-8 w-auto" />
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
