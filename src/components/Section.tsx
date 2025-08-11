import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx('py-16 scroll-mt-20', className)}>
      <div className="mx-auto max-w-screen-lg px-4">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">{title}</h2>
          {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}