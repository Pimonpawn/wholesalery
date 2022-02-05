import { MailOutlined } from '@ant-design/icons';
import {
  Button, Form, Input, Row,
} from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import './index.scss';

const ForgotPassword = ():JSX.Element => {
  const history = useHistory();
  const onFinish = (value: string) => {
    console.log(value);
  };

  return (
    <div className="ForgotPassword">
      <div className="LoginBody">
        <Row justify="center">
          <h1>Forgot Password</h1>
          <p>
            Enter your email and we&apos;ll send you a link to
            <br />
            reset your password.
          </p>
        </Row>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your Phone Number!' }]}
          >
            <Input type="number" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button className="BackLogin" onClick={() => history.push('/login')} type="text">&#60; Back to login</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
