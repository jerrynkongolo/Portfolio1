import React from 'react';
import Nav from '../components/Nav';
import { projects } from '../types/project';
import { ProjectGridCard } from '../components/project/ProjectGridCard';

function Home() {
  return (
    <>
      <header className="site-header">
        <a className="skip-link" href="#content">Skip to content</a>

        <Nav />

        <section className="hero">
          <p className="eyebrow">Available for freelance & contract</p>
          <h1>I help teams design and build polished products—UI/UX, front‑end, and brand identity.</h1>
          <p className="subhead">Product designer who codes. I turn research and prototypes into production‑ready UI and brand systems.</p>
          <div className="cta">
            <a className="btn" href="/projects">View case studies</a>
            <a className="btn btn--ghost" href="mailto:you@yourmail.com">Book a call</a>
          </div>
        </section>
      </header>

      <main id="content">
        <section id="work" className="work container" aria-label="Selected work">
          <h2>Selected work</h2>
          <div className="work-grid">
            {projects.map((project) => (
              <ProjectGridCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
