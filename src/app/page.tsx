import Section from '@components/Section';
import ProjectGrid from '@components/ProjectGrid';
import ExpeditionGrid from '@components/ExpeditionGrid';
import ContactCard from '@components/ContactCard';
import { ArrowDownRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">Hi, I&#39;m Darren Murphy</h1>
        <p className="mt-4 text-lg text-muted">Full-stack developer & mountain enthusiast</p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="flex items-center gap-2 rounded bg-accentProject px-5 py-3 font-medium text-white hover:bg-accentProject/90 focus-visible:outline focus-visible:outline-2">
            View Projects <ArrowDownRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="flex items-center gap-2 rounded border border-accentProject px-5 py-3 font-medium text-accentProject hover:bg-accentProject/10 focus-visible:outline focus-visible:outline-2">
            Contact
          </a>
        </div>
      </section>

      {/* About Me */}
      <Section id="about" title="About Me">
        <div className="space-y-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo.</p>
          <p>Aliquam erat volutpat. Morbi lobortis ligula in sapien facilisis, at ultrices metus cursus. Quisque sit amet.</p>
          <p>Duis rhoncus feugiat lacus sed posuere. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
          <div className="pt-4">
            <a href="/Darren_Murphy_Resume.pdf" target="_blank" className="rounded bg-accentProject px-6 py-3 font-medium text-white hover:bg-accentProject/90">
              View Resume
            </a>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <ProjectGrid />
      </Section>

      {/* Expeditions */}
      <Section id="expeditions" title="Mountain Expeditions">
        <ExpeditionGrid />
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <ContactCard />
      </Section>
    </main>
  );
}