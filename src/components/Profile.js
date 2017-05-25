import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ProfilePhoto from '../images/dale-about.jpg';

import data from '../data';

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
              <p>{ data.profileText1 }</p>
              <p>{ data.profileText2 }</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
