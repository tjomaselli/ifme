import { Col, Row } from 'antd';
import React from 'react';
import { storiesOf } from '@storybook/react';
import photoJulia from '../../../app/assets/images/contributors/julia_nguyen.jpg';
import photoTara from '../../../app/assets/images/contributors/tara_swenson.jpg';
import { Avatar } from '../components/Avatar';

storiesOf('Avatar', module)
  .add('With name', () => (
    <Row>
      <Col span={8}>
        <Avatar src={photoJulia} name="Julia Nguyen" displayName />
      </Col>
      <Col span={8}>
        <Avatar src={photoTara} name="Tara Swenson" displayName />
      </Col>
      <Col span={8}>
        <Avatar
          src="NonExistentFile.jpg"
          name="Default On Loading Error"
          displayName
        />
      </Col>
    </Row>
  ))
  .add('Without name', () => (
    <Row>
      <Col span={8}>
        <Avatar src={photoJulia} name="Julia Nguyen" />
      </Col>
      <Col span={8}>
        <Avatar src={photoTara} name="Tara Swenson" />
      </Col>
      <Col span={8}>
        <Avatar src="NonExistentFile.jpg" name="Default On Loading Error" />
      </Col>
    </Row>
  ));
