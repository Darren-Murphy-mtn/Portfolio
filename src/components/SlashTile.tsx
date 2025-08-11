import clsx from 'clsx';
import { ReactNode } from 'react';

interface SlashTileProps {
  onClick: () => void;
  label: string;
  shortLabel?: string;
  accent: 'project' | 'expedition';
}

export default function SlashTile({ onClick, label, shortLabel, accent }: SlashTileProps) {
  const accentColor = accent === 'project' ? 'accentProject' : 'accentExpedition';

  return (
    <button
      onClick={onClick}
      className={clsx(
        'group relative flex h-24 items-center justify-center overflow-hidden rounded border border-muted/30 bg-background p-4 shadow-sm transition focus-visible:outline focus-visible:outline-2',
        `hover:border-${accentColor}`
      )}
    >
      {/* Collapsed slashes */}
      <span className="pointer-events-none font-mono text-2xl tracking-widest text-muted transition-all group-hover:opacity-0">
        ////
      </span>
      {/* Expanded label */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-semibold text-lg opacity-0 transition-all group-hover:opacity-100">
        {shortLabel || label}
      </span>
    </button>
  );
}