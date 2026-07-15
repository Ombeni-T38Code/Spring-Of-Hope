import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeartHandshake, Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";
import logoImage from "../../assets/logos.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
      title: "Our Impact",
      basePath: "/impact",
      links: [
        { label: "Metrics & Data", path: "/impact/metrics" },
        { label: "Success Stories", path: "/impact/stories" },
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
      <nav className={styles.navBar}>
        {/* Logo */}
        <Link to="/" className={styles.brandLink} onClick={closeMenu}>
          <div className={styles.brandContainer}>
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
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
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
        </div>

        {/* Donate Button */}
        <div className={styles.desktopActions}>
          <Link to="/donate" className={styles.donateLinkBtn}>
            <HeartHandshake size={16} />
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuTrigger}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${
          isMenuOpen ? styles.drawerOpen : ""
        }`}
      >
        <div className={styles.mobileLinksContainer}>
          {/* Home */}
          <Link
            to="/"
            className={styles.mobileParentLink}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* Dropdown Groups */}
          {menuConfig.map((item, index) => (
            <div key={index} className={styles.mobileGroupBlock}>
              <Link
                to={item.basePath}
                className={styles.mobileParentLink}
                onClick={closeMenu}
              >
                {item.title}
              </Link>

              <div className={styles.mobileSubGroup}>
                {item.links.map((link, subIndex) => (
                  <Link
                    key={subIndex}
                    to={link.path}
                    className={styles.mobileSubLink}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Where We Work */}
          <Link
            to="/where-we-work"
            className={styles.mobileParentLink}
            onClick={closeMenu}
          >
            Where We Work
          </Link>

          {/* Donate */}
          <Link
            to="/donate"
            className={styles.mobileDonateBtn}
            onClick={closeMenu}
          >
            <HeartHandshake size={16} />
            Donate
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;