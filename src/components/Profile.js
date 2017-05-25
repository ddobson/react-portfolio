import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ProfilePhoto from '../images/dale-about.jpg';

const Profile = () => {
  return (
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={12} sm={6} md={5} lg={4}>
            <div className="img-wrap">
              <img src={ProfilePhoto} alt="" className="profile"/>
            </div>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4}>
            <div className="about-info">
              <h1>Hi, I'm Dale</h1>
              <hr/>
              <p>I'm a web developer based in Southern New England. Software development combines my passion for technology with creative freedom and constant personal growth.</p>
              <p>As a former Quality Engineer at Teespring, I understand what it means to deliver a product and support it in production. As I move into a full-time development role my goal is to take that experience to the next level, building awesome applications that put quality first.</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
