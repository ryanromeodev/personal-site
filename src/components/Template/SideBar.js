import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ryan Romeo</h2>
        <p>
          <a href="mailto:ryanromeo10@gmail.com">ryanromeo10@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ryan. I am a student of {' '}
        <a href="https://www.hs-bremen.de/">Hochschule Bremen</a>, having
        work experience in IT from {' '} <a href="https://www.tcs.com/">Tata Consultancy Services Ltd.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; <Link to="/"> Ryan Romeo.</Link>
      </p>
    </section>
  </section>
);

export default SideBar;
