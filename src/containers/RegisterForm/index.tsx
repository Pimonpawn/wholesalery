import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, Input, Button, Checkbox, Select,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import type { RegisterFormPage } from '../../interface/RegisterForm';
import './index.scss';

const { TextArea } = Input;
const { Option } = Select;

const RegisterForm = ():JSX.Element => {
  const history = useHistory();
  const [form] = Form.useForm();

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    store: '',
    legalPersonality: '',
    registration: '',
    storeAddress: '',
    province: '',
    zip: '',
    country: '',
    phone: '',
    storeUrl: '',
    storeCategories: '',
    remember: '',
  });

  let name;

  let value;

  const children = [];
  for (let i = 10; i < 36; i += 1) {
    children.push(<Option value={i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  const handleInputs = (e: { target: { name: any; value: any; }; }) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // const OnSubmit = (value: RegisterFormPage) => {
  //   console.log(value);
  // };

  return (
    <>
      <LeftOutlined
        onClick={() => {
          history.goBack();
        }}
        style={{ margin: '25px 0 0 65px', position: 'absolute', fontSize: '20px' }}
      />
      <div className="RegisterForm">
        <h2>
          Apply to sell on wholesalery
        </h2>
        <p>
          Tell us a little bit about your brand. We’ll use
          <br />
          this information when we review your application.
        </p>
        <Form
          form={form}
          layout="vertical"
          // onFinish={OnSubmit}
        >
          <Form.Item style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-10px' }}>
            <Form.Item
              name="firstname"
              label="First name"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)' }}
            >
              <Input value={user.firstname} onChange={handleInputs} />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="Last name"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)', margin: '0 2%' }}
            >
              <Input value={user.lastname} onChange={handleInputs} />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            style={{ display: 'inline-block', width: 'calc(100% - 2%)' }}
          >
            <Input value={user.email} onChange={handleInputs} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Enter password"
            style={{ display: 'inline-block', width: 'calc(100% - 2%)' }}
          >
            <Input.Password value={user.password} onChange={handleInputs} />
          </Form.Item>
          <Form.Item
            name="store"
            label="Store name"
            style={{ display: 'inline-block', width: 'calc(50% - 2%)' }}
          >
            <Input value={user.store} onChange={handleInputs} />
          </Form.Item>
          <Form.Item style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-10px' }}>
            <Form.Item
              name="legalPersonality"
              label="Legal Personality"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)' }}
            >
              <Input value={user.legalPersonality} onChange={handleInputs} />
            </Form.Item>
            <Form.Item
              name="registration"
              label="Commercial registration number"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)', margin: '0 2%' }}
            >
              <Input value={user.registration} onChange={handleInputs} />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="storeAddress"
            label="Store Address"
            style={{ display: 'inline-block', width: 'calc(100% - 2%)' }}
          >
            <TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
          <Form.Item style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-10px' }}>
            <Form.Item
              name="province"
              label="Province"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)' }}
            >
              <Input value={user.province} onChange={handleInputs} />
            </Form.Item>
            <Form.Item
              name="zip"
              label="Zip/Postal code"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)', margin: '0 2%' }}
            >
              <Input value={user.zip} onChange={handleInputs} />
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-10px' }}>
            <Form.Item
              name="country"
              label="Country/Region"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)' }}
            >
              <Input value={user.country} onChange={handleInputs} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone number"
              style={{ display: 'inline-block', width: 'calc(50% - 2%)', margin: '0 2%' }}
            >
              <Input value={user.phone} onChange={handleInputs} />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="storeUrl"
            label="Store website Link"
            style={{ display: 'inline-block', width: 'calc(100% - 2%)' }}
          >
            <Input value={user.storeUrl} onChange={handleInputs} />
          </Form.Item>
          <Form.Item
            name="storeCategories"
            label="Store categories"
            style={{ display: 'inline-block', width: 'calc(100% - 2%)' }}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
            >
              {children}
            </Select>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>
                <div className="TermsAndPrivacy">
                  By signing up for wholesaler, you’re agreeing to our&nbsp;
                  <a aria-hidden className="login-form-forgot" href="/">
                    Terms
                  </a>
            &nbsp;and&nbsp;
                  <a aria-hidden className="login-form-forgot" href="/">
                    Privacy Policy
                  </a>
                </div>
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ display: 'flex', paddingLeft: '35%' }}>
            <Button className="SubmitForm" type="primary" htmlType="submit">Apply</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;
