import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu = () => {
  return (
    <div className="burger-wrap">
      <Menu right>
        <a id="About" href="#about">About</a>
        <a id="Skills" href="#skills">Skills</a>
        <a id="Projects" href="#projects">Projects</a>
        <a id="Contact" href="#contact">Contact</a>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
