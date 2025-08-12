import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav(){
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const workHref = pathname === "/" ? "#work" : "/#work";

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <nav className="nav" aria-label="Primary" data-open={open ? "true" : "false"}>
      <a className="logo" href="/">Rafikki <strong>Studio</strong></a>

      <button className="nav__toggle" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(v => !v)}>
        <span className="sr-only">Menu</span> ☰
      </button>

      <ul id="primary-menu" className="nav__links" onClick={() => setOpen(false)}>
        <li><a href={workHref}>Work</a></li>
        <li><a href="/projects">Case studies</a></li>
        <li><a href="/about">About</a></li>
        <li className="only-desktop"><a className="btn btn--ghost btn--sm" href="mailto:you@yourmail.com">Contact</a></li>
        <li className="only-desktop"><a className="btn btn--sm" href="/resume.pdf">Résumé</a></li>
      </ul>
    </nav>
  );
}
