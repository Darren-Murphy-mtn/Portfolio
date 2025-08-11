import { useState } from 'react';
import SlashTile from './SlashTile';
import Modal from './Modal';
import Carousel from './Carousel';
import { expeditions } from '@data/expeditions';

export default function ExpeditionGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const expedition = expeditions.find((e) => e.id === openId);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expeditions.map((e) => (
          <SlashTile key={e.id} label={e.label} accent="expedition" onClick={() => setOpenId(e.id)} />
        ))}
      </div>
      {expedition && (
        <Modal open={!!expedition} onClose={() => setOpenId(null)}>
          <h3 className="text-2xl font-semibold mb-4">{expedition.label}</h3>
          <Carousel images={expedition.images} basePath="images/expeditions" alt={expedition.label} />
          <p className="mt-4 text-sm text-muted">{expedition.summary}</p>
          <p className="mt-2 text-xs text-muted">{expedition.region} {expedition.elevation && `• ${expedition.elevation}`} {expedition.date && `• ${expedition.date}`}</p>
          {expedition.links && (
            <div className="mt-4 flex gap-4">
              {expedition.links.tripReport && (
                <a href={expedition.links.tripReport} target="_blank" rel="noopener" className="text-accentExpedition underline">
                  Trip Report
                </a>
              )}
              {expedition.links.photos && (
                <a href={expedition.links.photos} target="_blank" rel="noopener" className="text-accentExpedition underline">
                  Photos
                </a>
              )}
              {expedition.links.gpx && (
                <a href={expedition.links.gpx} target="_blank" rel="noopener" className="text-accentExpedition underline">
                  GPX File
                </a>
              )}
            </div>
          )}
        </Modal>
      )}
    </>
  );
}