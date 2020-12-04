import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-box ml-3'>
        <h1 className='navbar__logo'>Cocktailinio</h1>
      </div>
      <div className='navbar__navigation mr-3'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <a href='/' className='navbar__link'>
              Coctails
            </a>
          </li>
          <li className='navbar__item'>
            <a href='/' className='navbar__link'>
              About us
            </a>
          </li>
          <li className='navbar__item'>
            <a href='/' className='navbar__link'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
