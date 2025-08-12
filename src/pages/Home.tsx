import React from 'react';

function Home() {
  return (
    <>
      <header className="site-header">
        <a className="skip-link" href="#content">Skip to content</a>

        <nav className="nav" aria-label="Primary">
          <a className="logo" href="/">Rafikki Studio</a>
          <ul className="nav__links">
            <li><a href="#work">Work</a></li>
            <li><a href="/about">About</a></li>
            <li><a className="btn btn--ghost btn--sm" href="mailto:you@yourmail.com">Contact</a></li>
            <li><a className="btn btn--sm" href="/resume.pdf">Résumé</a></li>
          </ul>
        </nav>

        <section className="hero">
          <p className="eyebrow">Available for freelance & contract</p>
          <h1>I help teams design and build polished products—UI/UX, front‑end, and brand identity.</h1>
          <p className="subhead">Product designer who codes. I turn research and prototypes into production‑ready UI and brand systems.</p>
          <div className="cta">
            <a className="btn" href="#work">View case studies</a>
            <a className="btn btn--ghost" href="mailto:you@yourmail.com">Book a call</a>
          </div>
        </section>
      </header>

      <main id="content">
        {/* Your sections: Work, About, etc. */}
      </main>
    </>
  );
}

export default Home;
