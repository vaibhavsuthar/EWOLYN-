import { Boxes } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Boxes className="h-8 w-8 text-accent" />
          <div className="font-headline text-2xl font-bold uppercase text-background">
            EVVOLYN
          </div>
        </div>
        <p className="mb-2">Revolutionising Indian Startups & MSMEs</p>
        <p className="font-headline text-sm font-bold tracking-wider">
          EAGLE WOLF LION - तीनो आपके साथ
        </p>

        <div className="mt-8 pt-8 border-t border-background/20 text-sm text-background/60">
          &copy; {new Date().getFullYear()} Evvolyn Services Private Limited.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
