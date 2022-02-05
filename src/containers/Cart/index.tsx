/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
} from 'antd';
import { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import TableCart from '../../components/TableCart';
import './index.scss';

const Cart = ():JSX.Element => {
  const [saveCart, setSaveCart] = useState<any>([]);

  const saveCartData = (name: string, data: any) => {
    // const getSaveCart = saveCart;
    // getSaveCart[name] = data;
    // setSaveCart(getSaveCart);
    console.log('success');
  };

  return (
    <>
      <TopNavigation />
      <div className="Cart">
        <h2>
          Your Cart
        </h2>
        <div className="Body">
          <div className="Store">
            <div className="CartCard">
              <h2>Store name</h2>
              <TableCart cartSave={saveCartData} store="12" />
            </div>
            <div className="CartCard">
              <h2>Store name</h2>
              <TableCart cartSave="12" store="12" />
            </div>
          </div>
          <div className="Summary">
            <h2>
              Summary
            </h2>
            <p className="SubHead">Ready to ship</p>
            <div className="NameSummary">
              <p>Store name 1</p>
              <p>12$</p>
            </div>
            <div className="NameSummary">
              <p>Store name 2</p>
              <p>12$</p>
            </div>
            <div className="NameSummary">
              <p>Store name 3</p>
              <p>12$</p>
            </div>
            <br />
            <br />
            <br />
            <div className="NameSummary">
              <p>Total</p>
              <p>36$</p>
            </div>
            <Button className="Order" aria-hidden onClick={() => { console.log('success'); }}>
              Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
