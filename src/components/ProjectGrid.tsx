"use client";
import { useState } from 'react';
import SlashTile from './SlashTile';
import Modal from './Modal';
import Carousel from './Carousel';
import { projects } from '@data/projects';

export default function ProjectGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const project = projects.find((p) => p.id === openId);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <SlashTile key={p.id} label={p.label} shortLabel={p.shortLabel} accent="project" onClick={() => setOpenId(p.id)} />
        ))}
      </div>
      {project && (
        <Modal open={!!project} onClose={() => setOpenId(null)}>
          <h3 className="text-2xl font-semibold mb-4">{project.label}</h3>
          <Carousel images={project.images} basePath="images/projects" alt={project.label} />
          <p className="mt-4 text-sm text-muted">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded bg-accentProject/10 px-2 py-1 text-xs text-accentProject">
                {tag}
              </li>
            ))}
          </ul>
          {project.links && (
            <div className="mt-4 flex gap-4">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener" className="text-accentProject underline">
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener" className="text-accentProject underline">
                  GitHub
                </a>
              )}
              {project.links.writeup && (
                <a href={project.links.writeup} target="_blank" rel="noopener" className="text-accentProject underline">
                  Write-up
                </a>
              )}
            </div>
          )}
        </Modal>
      )}
    </>
  );
}