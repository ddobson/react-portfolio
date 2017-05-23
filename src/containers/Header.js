import React from 'react';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';

import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Navigation/>
      <Intro/>
    </div>
  );
};

export default Header;
