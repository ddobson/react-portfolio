import React from 'react';

import BurgerMenu from './BurgerMenu';
import DesktopMenu from './DesktopMenu';

import '../styles/Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      showNavBg: false
    };

    this.updateWidowWidth = this.updateWidowWidth.bind(this);
    this.shouldShowNavBg = this.shouldShowNavBg.bind(this);
  }

  updateWidowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  shouldShowNavBg() {
    const showNavBg = window.scrollY > 60 ? true : false;
    this.setState({ showNavBg });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidowWidth);
    window.addEventListener('scroll', this.shouldShowNavBg);
  }

  render() {
    const menu = this.state.windowWidth <= 768 ? <BurgerMenu/> : <DesktopMenu/>;

    return (
      <div className="nav-wrapper">
        <nav className={this.state.showNavBg ? 'nav-bar nav-bg' : 'nav-bar'}>
          <h1>Dale Dobson</h1>
          { menu }
        </nav>
      </div>
    );
  }
}

export default Navigation;
