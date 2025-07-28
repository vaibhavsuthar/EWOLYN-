import { Boxes } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-cyan text-white/80">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Boxes className="h-8 w-8 text-soft-orange" />
          <div className="text-2xl font-bold uppercase text-white">
            EVVOLYN
          </div>
        </div>
        <p className="mb-2">Revolutionizing Indian Startups & MSMEs</p>
        <p className="text-sm font-bold tracking-wider">
          EAGLE WOLF LION - The trio that stands with you!!
        </p>

        <div className="mt-8 pt-8 border-t border-white/20 text-sm text-white/60">
          &copy; {new Date().getFullYear()} Evvolyn Services Private Limited.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
