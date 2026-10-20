import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { libraryInfo, navLinks } from '../data/library.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Banner: library name + mission statement */}
      <header className="site-header">
        <div className="container brand-banner">
          <Link to="/" className="brand" aria-label="Bright Future Library home">
            <span className="brand-emblem" aria-hidden="true">📚</span>
            <span className="brand-name">
              Bright Future <span>Library</span>
            </span>
          </Link>

          <p className="brand-mission">
            <strong>Our mission</strong>
            {libraryInfo.mission}
          </p>
        </div>
      </header>

      {/* Navigation bar stays visible while scrolling */}
      <div className="nav-bar">
        <div className="container nav-inner">
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="bars" aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
            {open ? 'Close' : 'Menu'}
          </button>

          <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main">
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
