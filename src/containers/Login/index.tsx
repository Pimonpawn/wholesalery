import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Form, Input, Button, Row, Radio,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import type { LoginForm } from '../../interface/Login';
import GLogo from '../../image/G_Logo.svg.png';
import FacebookLogo from '../../image/Facebook_Logo.png';
import './index.scss';
import auth from '../../firebase';

const Login = ():JSX.Element => {
  const [remember, setRemember] = useState<boolean>(false);
  const [formEmail, setFormEmail] = useState<string>('');
  const [formPassword, setFormPassword] = useState<string>('');
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const history = useHistory();

  const onFinish = (values: LoginForm) => {
    console.log('Received values login of form: ', values);
    auth.signInWithEmailAndPassword(values.username, values.password)
      .then((res) => {
        setLoginStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRemember = () => {
    setRemember(!remember);
  };

  // const login = (email: string, password: string) => {
  //   auth.signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       setLoginStatus(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   if (loginStatus === true) {
  //     console.log('Login!!!');
  //   }
  // }, [loginStatus]);

  return (
    <div className="Login">
      {loginStatus === true && (
        <p>Logged In Successfully</p>
      )}
      {/* {loginStatus === false && (
        <p>Logged In failed</p>
      )} */}
      <div className="LoginBody">
        <Row justify="center">
          <h1>Login to your Account</h1>
          <p>Welcome back to wholesalery</p>
        </Row>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={formPassword}
              onChange={(e) => setFormPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Row className="RememberAndForgot" justify="space-between">
              <Form.Item name="remember" noStyle>
                <Radio onClick={onRemember} checked={remember} className="login-form-remember">Remember Me</Radio>
              </Form.Item>

              <div
                className="login-form-forgot"
                onClick={(e) => {
                  e.preventDefault();
                  history.push('/forgotpassword');
                }}
                aria-hidden="true"
              >
                Forgot password?
              </div>
            </Row>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => onFinish}>
              Login
            </Button>
          </Form.Item>
          {/* <Form.Item>
            <Row className="AdditionLogin" justify="space-between">
              <Button icon={<img alt="G_logo" src={GLogo} />}>
                Login with google
              </Button>
              <Button icon={<img alt="Facebook_logo" src={FacebookLogo} />}>
                Login with Facebook
              </Button>
            </Row>
          </Form.Item> */}
          <Form.Item>
            <div className="MessageSignUp">Don&#39;t have an account ?&nbsp;</div>
            <Button className="SignUp" onClick={() => history.push('/register')} type="link">Sign up</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
