import React from 'react';
import CardCategory from '../../../components/CardCategory';
import './index.scss';

const Categories = (): JSX.Element => {
  const a = 'a';
  return (
    <div className="Categories">
      <div className="Header">
        <h2>
          Featured Categories
          &nbsp;
          <a araia-hidden className="LinkAllCategories" href="/">
            All Categories &nbsp;
            <b>&gt;</b>
          </a>
        </h2>
      </div>
      <div className="Cards">
        {
        [...Array(10)].map(() => <CardCategory />)
      }
      </div>
    </div>
  );
};

export default Categories;
