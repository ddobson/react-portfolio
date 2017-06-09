import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { CSSTransitionGroup } from 'react-transition-group';

import Skill from '../components/Skill';

import data from '../data';

class SkillContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showContainerItems: false
    };

    this.shouldRenderContainerItems = this.shouldRenderContainerItems.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.shouldRenderContainerItems);
  }

  shouldRenderContainerItems() {
    const containerTop = this.refs.skillContainer.getBoundingClientRect().top - window.innerHeight;
    const showContainerItems = containerTop <= -50 ? true : false;

    this.setState({ showContainerItems });
  }

  renderSkills() {
    return data.skills.map((skillRow, i) => {
      return (
        <Row center="xs" key={`skillRow-${i}`}>
          { skillRow.map((skill, k) => <Skill key={`skill-${k}`} skill={skill}/>) }
        </Row>
      );
    });
  }

  render() {
    const animationContainer = (
      <CSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={1500} transitionEnter={false} transitionLeave={false}>
        <Row>
          <Col xs={12}>
            <div className="skill-intro">
              <h1>Skills</h1>
              <p>My skills are focused on JavaScript &amp; Ruby on Rails.</p>
              <hr/>
            </div>
          </Col>
        </Row>
        <Row className="icon-row-wrap">
          <Col xs={12}>
            { this.renderSkills() }
          </Col>
        </Row>
      </CSSTransitionGroup>
    );

    return (
      <div ref="skillContainer" className="skill-container">
        { this.state.showContainerItems ? animationContainer : <div></div> }
      </div>
    );
  }
}

export default SkillContainer;
