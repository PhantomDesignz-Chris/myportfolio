import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Services</Link>
            <Link to='/'>Portfolio</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CSV
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </div>
          <small class='website-rights'>CSV © 2023</small>
          <div class='social-icons'>
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              Facebook
            </Link>
            <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              Instagram
            </Link>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
              Youtube
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
