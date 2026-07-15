import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import styles from './NavDropdown.module.css';

const NavDropdown = ({ title, basePath, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Check if current active route belongs to this dropdown group
  const isActiveGroup = location.pathname.startsWith(basePath);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      className={styles.dropdownContainer} 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={basePath}
        className={`${styles.dropdownTrigger} ${isOpen ? styles.openTrigger : ''} ${isActiveGroup ? styles.activeTrigger : ''}`}
        onClick={() => setIsOpen(false)}
      >
        {title} 
        <ChevronDown size={14} className={`${styles.chevron} ${isOpen ? styles.chevronRotate : ''}`} />
      </Link>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {links.map((link, index) => {
            const isItemActive = location.pathname === link.path;
            return (
              <Link 
                key={index} 
                to={link.path} 
                className={`${styles.dropdownItem} ${isItemActive ? styles.activeDropdownItem : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;