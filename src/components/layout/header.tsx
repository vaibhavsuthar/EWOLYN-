import Link from 'next/link';
import { Boxes } from 'lucide-react';
import { MainNav } from './main-nav';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="#home" className="flex items-center gap-2">
          <Boxes className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold uppercase font-headline text-primary">
            Evvolyn
          </span>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
