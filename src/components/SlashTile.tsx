"use client";
import clsx from 'clsx';

interface SlashTileProps {
  onClick: () => void;
  label: string;
  shortLabel?: string;
  accent: 'project' | 'expedition';
}

export default function SlashTile({ onClick, label, shortLabel, accent }: SlashTileProps) {
  const isProject = accent === 'project';

  return (
    <button
      onClick={onClick}
      data-accent={isProject ? 'project' : 'expedition'}
      className={clsx(
        'group relative flex h-24 items-center justify-center overflow-hidden rounded border border-muted/30 bg-background p-4 shadow-sm transition focus-visible:outline focus-visible:outline-2',
        // accent border on hover via data attribute
        'hover:[&[data-accent="project"]]:border-accentProject hover:[&[data-accent="expedition"]]:border-accentExpedition'
      )}
    >
      {/* Collapsed slashes */}
      <span className="pointer-events-none font-mono text-2xl tracking-widest text-muted transition-all group-hover:opacity-0">
        ////
      </span>
      {/* Expanded label */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-lg font-semibold opacity-0 transition-all group-hover:opacity-100">
        {shortLabel || label}
      </span>
    </button>
  );
}