import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav(){
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const workHref = pathname === "/" ? "#work" : "/#work";

  // prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // helper: close menu + smooth scroll if we're on the home page
  const onWorkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (workHref === "#work") {
      e.preventDefault();
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <nav className="nav" aria-label="Primary" data-open={open ? "true" : "false"}>
      <a className="logo" href="/">Rafikki <strong>Studio</strong></a>

      <button className="nav__toggle" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(v => !v)}>
        <span className="sr-only">Menu</span>{open ? "Close ✕" : "Menu ☰"}
      </button>

      <ul id="primary-menu" className="nav__links">
        <li><a href={workHref} onClick={onWorkClick}>Work</a></li>
        <li><a href="/about" onClick={() => setOpen(false)}>About</a></li>
        <li className="only-desktop"><a className="btn btn--ghost btn--sm" href="mailto:you@yourmail.com">Contact</a></li>
        <li className="only-desktop"><a className="btn btn--sm" href="/resume.pdf">Résumé</a></li>
      </ul>

      {/* overlay to dim page when menu is open */}
      <div className="nav__scrim" hidden={!open} onClick={() => setOpen(false)}></div>
    </nav>
  );
}
