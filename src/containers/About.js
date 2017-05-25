import React from 'react';
import Profile from '../components/Profile';

import '../styles/About.scss';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
    };
  }

  render() {
    return (
      <div className="about">
        <Profile/>
      </div>
    );
  }
}

export default About;
