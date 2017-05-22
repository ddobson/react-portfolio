import React, { Component } from 'react';

// Components
import Header from './Header';
import About from './About';
import SkillContainer from './SkillContainer';
import ProjectContainer from './ProjectContainer';
import Contact from './Contact';

// Stlyes
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <SkillContainer/>
        <ProjectContainer/>
        <Contact/>
      </div>
    );
  }
}

export default App;
