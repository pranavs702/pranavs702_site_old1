import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='footer-links'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link github'
              to='/git'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/youtube'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link devpost'
              to='/devpost'
              target='_blank'
              aria-label='Devpost'
            >
              <i class='fab fa-dev' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/linkedin'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;