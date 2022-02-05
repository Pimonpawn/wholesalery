import React, { useState } from 'react';
import {
  GithubOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import FacebookBlackLogo from '../../image/Facebook_Black_Logo.png';
import ShippingLogo from '../../image/Shipping.png';
import MoneyLogo from '../../image/Money.png';
import SupportLogo from '../../image/Support.png';
import PaymentLogo from '../../image/Payment.png';
import './index.scss';

const BottomNavigation = (): JSX.Element => {
  const [email, setEmail] = useState<string>();

  const onChangeEmail = (e: string) => {
    setEmail(e);
  };

  const submit = () => {
    console.log(email);
  };

  return (
    <div className="FooterNavigation">
      <div className="SubBottomNavigation">
        <div className="Details">
          <img alt="Shipping" src={ShippingLogo} />
          <div className="Text">
            <h2>Free Shipping</h2>
            <p>Free delivery for all orders</p>
          </div>
        </div>
        <div className="Details">
          <img alt="Shipping" src={MoneyLogo} />
          <div className="Text">
            <h2>Money Guarantee</h2>
            <p>30 days money back</p>
          </div>
        </div>
        <div className="Details">
          <img alt="Shipping" src={SupportLogo} />
          <div className="Text">
            <h2>24/7 Support</h2>
            <p>Friendly 24/7 support</p>
          </div>
        </div>
        <div className="Details">
          <img alt="Shipping" src={PaymentLogo} />
          <div className="Text">
            <h2>Secure Payment</h2>
            <p>All cards accepted</p>
          </div>
        </div>
      </div>
      <div className="BottomNavigation">
        <div className="Contact">
          <h2>wholesalery</h2>
          <p>
            Our company is a whole sale platform
            <br />
            that support ......
          </p>
          <div className="ListIcon">
            <img src={FacebookBlackLogo} className="Icon" alt="Facebook Logo" />
            <TwitterOutlined className="Icon" />
            <InstagramOutlined className="Icon" />
            <YoutubeOutlined className="Icon" />
            <GithubOutlined className="Icon" />
          </div>
        </div>
        <div className="BodyBottomNavigation">
          <h2>Products</h2>
          <div className="ListMenu">
            <p>Features</p>
            <p>Enterpise</p>
            <p>Security</p>
            <p>Customer Stories</p>
            <p>Pricing</p>
            <p>Demo</p>
          </div>
        </div>
        <div className="BodyBottomNavigation">
          <h2>Teams</h2>
          <div className="ListMenu">
            <p>Engineering</p>
            <p>Financial Services</p>
            <p>Sales</p>
            <p>IT</p>
            <p>Customer Support</p>
            <p>Human Resources</p>
            <p>Media</p>
          </div>
        </div>
        <div className="BodyBottomNavigation">
          <h2>Company</h2>
          <div className="ListMenu">
            <p>About Us</p>
            <p>Leadership</p>
            <p>News</p>
            <p>Media Kit</p>
            <p>Career</p>
            <p>Documentation</p>
          </div>
        </div>
        <div className="BodyBottomNavigation">
          <h2>Subscribe Us</h2>
          <div className="ListMenu">
            <Input placeholder="Your email here ..." onChange={(e) => onChangeEmail(e.target.value)} />
            <Button onClick={submit}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
