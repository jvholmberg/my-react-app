import React from 'react';

import './style.css';

const Footer = ({
  facebook, twitter, googleplus, linkedin, instagram, pinterest,
  className, children, ...props,
}) => (
  <footer className='Footer-Container'>
    <div>
      <div className='Footer-Links'>
        <a href={'dashboard'}>About us</a>
        <a href={'dashboard'}>Products</a>
        <a href={'dashboard'}>Awards</a>
        <a href={'dashboard'}>Help</a>
        <a href={'dashboard'}>Contact</a>
      </div>
      <div className='Footer-Information'>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur.
        </p>
      </div>
      <div className='Footer-Social'>
        <a href={'www.google.com'}>
          <i className='fab fa-facebook-f' />
        </a>
        <a href={'www.google.com'}>
          <i className='fab fa-twitter' />
        </a>
        <a href={'www.google.com'}>
          <i className='fab fa-google-plus-g' />
        </a>
        <a href={'www.google.com'}>
          <i className='fab fa-linkedin-in' />
        </a>
        <a href={'www.google.com'}>
          <i className='fab fa-instagram' />
        </a>
        <a href={'www.google.com'}>
          <i className='fab fa-pinterest' />
        </a>
      </div>
      <div className='Footer-Copyright'>
        <span>© 2018 Copyright</span>
      </div>
    </div>
  </footer>
);
export default Footer;