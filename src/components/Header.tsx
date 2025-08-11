"use client";
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'expeditions', label: 'Expeditions' },
  { id: 'contact', label: 'Contact' }
];

export default function Header() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/80 border-b border-muted/20">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3">
        <a href="#hero" className="font-bold text-lg">
          Darren Murphy
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-1 font-medium text-sm focus-visible:outline focus-visible:outline-2 ${
                active === item.id ? 'text-accentProject' : ''
              }`}
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