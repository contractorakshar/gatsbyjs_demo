import { Link } from 'gatsby';
import * as React from 'react';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <>
      <main className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
      </main>
    </>
  );
};
export default Layout;
