import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeartHandshake, Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";
import logoImage from "../../assets/logos.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // 1. Detect scroll position for transparent -> glassmorphism shift
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Navigation Configuration
  const menuConfig = [
    {
      title: "About Us",
      basePath: "/about",
      links: [
        { label: "Our Mission & Vision", path: "/about/mission" },
        { label: "Team & Governance", path: "/about/team" },
      ],
    },
    {
      title: "What We Do",
      basePath: "/what-we-do",
      links: [
        { label: "Education Hubs", path: "/what-we-do/education" },
        { label: "Livelihoods", path: "/what-we-do/livelihoods" },
        { label: "MHPSS & Peace Building", path: "/what-we-do/healthcare" },
        { label: "Environment & Climate", path: "/what-we-do/environment" },
      ],
    },
    {
      title: "Get Involved",
      basePath: "/get-involved",
      links: [
        { label: "Ways to Join", path: "/get-involved/join" },
        { label: "Partner Registration", path: "/get-involved/register" },
      ],
    },
  ];

  return (
    <>
      <header
        className={`${styles.navBar} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.navContainer}>
          {/* Brand Logo */}
          <Link to="/" className={styles.brandLink} onClick={closeMenu}>
            <div className={styles.logoRow}>
              <img
                src={logoImage}
                alt="Springs Hope logo"
                className={styles.logoImage}
              />
              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>Springs Hope</span>
                <span className={styles.taglineText}>
                  Learn, Grow, Innovate
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.navLinks} aria-label="Desktop Navigation">
            <Link
              to="/"
              className={`${styles.standaloneLink} ${
                location.pathname === "/" ? styles.activeStandalone : ""
              }`}
            >
              Home
            </Link>

            {menuConfig.map((item, index) => (
              <NavDropdown
                key={index}
                title={item.title}
                basePath={item.basePath}
                links={item.links}
              />
            ))}

            <Link
              to="/where-we-work"
              className={`${styles.standaloneLink} ${
                location.pathname === "/where-we-work"
                  ? styles.activeStandalone
                  : ""
              }`}
            >
              Where We Work
            </Link>
          </nav>

          {/* Desktop Call To Action */}
          <div className={styles.desktopActions}>
            <Link to="/donate" className={styles.donateLinkBtn}>
              <HeartHandshake size={18} className={styles.btnIcon} />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger Icon */}
          <button
            className={styles.mobileMenuTrigger}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Backdrop overlay behind drawer */}
      <div
        className={`${styles.drawerOverlay} ${
          isMenuOpen ? styles.overlayActive : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Navigation */}
      <aside
        className={`${styles.mobileDrawer} ${
          isMenuOpen ? styles.drawerOpen : ""
        }`}
        aria-label="Mobile Navigation"
      >
        <div className={styles.mobileLinksContainer}>
          <Link
            to="/"
            className={`${styles.mobileParentLink} ${
              location.pathname === "/" ? styles.mobileActive : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>

          {menuConfig.map((item, index) => (
            <div key={index} className={styles.mobileGroupBlock}>
              <Link
                to={item.basePath}
                className={`${styles.mobileParentLink} ${
                  location.pathname.startsWith(item.basePath)
                    ? styles.mobileActive
                    : ""
                }`}
                onClick={closeMenu}
              >
                {item.title}
              </Link>

              <div className={styles.mobileSubGroup}>
                {item.links.map((link, subIndex) => (
                  <Link
                    key={subIndex}
                    to={link.path}
                    className={`${styles.mobileSubLink} ${
                      location.pathname === link.path
                        ? styles.mobileSubActive
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/where-we-work"
            className={`${styles.mobileParentLink} ${
              location.pathname === "/where-we-work" ? styles.mobileActive : ""
            }`}
            onClick={closeMenu}
          >
            Where We Work
          </Link>

          <Link
            to="/donate"
            className={styles.mobileDonateBtn}
            onClick={closeMenu}
          >
            <HeartHandshake size={18} />
            <span>Donate Now</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;