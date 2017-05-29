import React from 'react';
import { Col } from 'react-flexbox-grid';

import '../styles/Skill.scss';

const Skill = (props) => {
  return (
    <Col xs={6} sm={3}>
      <div className="skill-wrap">
        <div className="icon-wrap">
          <i className={`icon devicon-${props.skill.cssClassName}-plain`}></i>
        </div>
        <span>{props.skill.name}</span>
      </div>
    </Col>
  );
};

export default Skill;
