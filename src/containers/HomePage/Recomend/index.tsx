import React from 'react';
import './index.scss';
import CardProducts from '../../../components/CardProduct';

const Recomend = (): JSX.Element => {
  const a = '';
  return (
    <div className="Recommed">
      <div className="Header">
        <h2>
          Recommend Products
        </h2>
      </div>
      <div className="Cards">
        {
        [...Array(10)].map(() => <CardProducts />)
      }
      </div>
    </div>
  );
};

export default Recomend;
