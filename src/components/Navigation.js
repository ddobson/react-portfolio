import React from 'react';

import BurgerMenu from './BurgerMenu';
import DesktopMenu from './DesktopMenu';

import '../styles/Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };

    this.updateWidowWidth = this.updateWidowWidth.bind(this);
  }

  updateWidowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidowWidth);
  }

  render() {
    const menu = this.state.windowWidth <= 768 ? <BurgerMenu/> : <DesktopMenu/>;

    return (
      <nav className="nav-bar">
        <h1>Dale Dobson</h1>
        { menu }
      </nav>
    );
  }
}

export default Navigation;
