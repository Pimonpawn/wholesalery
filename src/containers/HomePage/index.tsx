import React from 'react';
import { Carousel } from 'antd';
import TopNavigation from '../../components/TopNavigation';
import Categories from './Categories';
import Recomend from './Recomend';
import BottomNavigation from '../../components/BottomNavigation';
// import { AdvertiseCard } from '../../mockJson/homePage.js';
import './index.scss';

const HomePage = (): JSX.Element => {
  const as = 12;
  return (
    <div className="HomePage">
      <TopNavigation />
      <div className="site-card-border-less-wrapper">
        <div className="contentLeft">
          <Carousel effect="fade" autoplay>
            <div
              className="contentStyleLeft"
              style={
                {
                  // backgroundImage: 'https://cdn.pixabay.com/photo/2015/03/26/09/52/chain-link-690503_1280.jpg',
                  backgroundColor: 'black',
                  color: 'white',
                }
              }
            >
              <h3>AdvertiseCard</h3>
            </div>
            <div
              className="contentStyleLeft"
              style={
                {
                  backgroundImage: 'https://cdn.pixabay.com/photo/2015/03/26/09/52/chain-link-690503_1280.jpg',
                  background: 'green',
                }
              }
            >
              <h3>2</h3>
            </div>
            <div className="contentStyleLeft">
              <h3>3</h3>
            </div>
          </Carousel>
        </div>
        {/* <div className="contentRight">
          <Carousel effect="fade" autoplay>
            <div className="contentStyleRight">
              <h3>1</h3>
            </div>
            <div className="contentStyleRight">
              <h3>2</h3>
            </div>
            <div className="contentStyleRight">
              <h3>3</h3>
            </div>
            <div className="contentStyleRight">
              <h3>4</h3>
            </div>
          </Carousel>
        </div> */}
      </div>
      {/* <Categories /> */}
      <Recomend />
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
