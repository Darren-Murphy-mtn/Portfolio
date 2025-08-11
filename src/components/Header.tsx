import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'expeditions', label: 'Expeditions' },
  { id: 'contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/80 border-b border-muted/20">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3">
        <Link href="#hero" className="font-bold text-lg">
          Darren Murphy
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-1 font-medium text-sm hover:text-accentProject focus-visible:outline focus-visible:outline-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}