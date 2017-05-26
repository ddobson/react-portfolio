import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Skill from '../components/Skill';

import data from '../data';

const SkillContainer = () => {
  const content = data.skills.map((skillRow, i) => {
    return (
      <Row center="xs" key={`skillRow-${i}`}>
        { skillRow.map((skill, k) => <Skill key={`skill-${k}`} skill={skill}/>) }
      </Row>
    );
  });

  return (
    <div className="skill-container">
      <Row>
        <Col xs={12}>
          <div className="skill-intro">
            <h1>Skills</h1>
            <p>My skills are focused on JavaScript &amp Ruby on Rails.</p>
            <hr/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          { content }
        </Col>
      </Row>
    </div>
  );
};

export default SkillContainer;
