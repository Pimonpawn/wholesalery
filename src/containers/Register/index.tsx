import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, Input, Button, Row,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import GLogo from '../../image/G_Logo.svg.png';
import FacebookLogo from '../../image/Facebook_Logo.png';
import './index.scss';
import { RegisterForm } from '../../interface/Register';

const Register = ():JSX.Element => {
  const history = useHistory();

  const onFinish = (values: RegisterForm) => {
    console.log('Received values register of form: ', values);
  };

  return (
    <div className="Register">
      <div className="LoginBody">
        <Row justify="start">
          <h1>Create Account</h1>
          <p>
            Follow the instructions to make it easier to
            register and you will be able to explore inside
          </p>
        </Row>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Row className="AdditionLogin" justify="space-between">
              <Button onClick={() => history.push({
                pathname: '/register/form',
                state: {
                  role: 'wholsealer',
                },
              })}
              >
                Get start as wholsealer
              </Button>
              <Button onClick={() => history.push({
                pathname: '/register/form',
                state: {
                  role: 'retailer',
                },
              })}
              >
                Get start as retailer
              </Button>
            </Row>
          </Form.Item>
          <Form.Item>
            <div className="MessageSignIn">Do you have an account ?&nbsp;</div>
            <Button className="SignIn" onClick={() => history.push('/login')} type="link">Sign in</Button>
          </Form.Item>
        </Form>
      </div>
    </div>

  );
};

export default Register;
