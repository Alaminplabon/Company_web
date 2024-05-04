import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <h1 style={{ margin: 0 }}>Welcome to My Company</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '10px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li style={{ display: 'inline', marginRight: '10px' }}><a href="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</a></li>
          <li style={{ display: 'inline' }}><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
