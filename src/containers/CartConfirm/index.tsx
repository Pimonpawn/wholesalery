/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, Radio, Space,
} from 'antd';
import { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import './index.scss';
import TableConfirm from '../../components/TableConfirm';

const CartConfirm = ():JSX.Element => {
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
      <div className="CartConfirm">
        <div className="Body">
          <div className="Store">
            <div className="CartCard">
              <h2>Store name</h2>
              <TableConfirm />
            </div>
            <div className="CartCard">
              <h2>Store name</h2>
              <TableConfirm />
            </div>
            <div className="CartCard">
              <h2>Store name</h2>
              <TableConfirm />
            </div>
            <div className="CartCard">
              <h2>Store name</h2>
              <TableConfirm />
            </div>
          </div>
          <div className="NoticationShipping">
            <p>
              DELIVERY ADDRESS
            </p>
            <div className="ListAddress">
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={1}>
                    <div className="HeadAddress">Customer name</div>
                    <div className="DetailAddress">
                      Tel: 083-xxx-xxxx
                      <br />
                      <br />
                      17/4 Village No.5 Bamroongrat Road, Pibulsongkram Sub-district,
                      Muang District, Bangkok, 10400
                    </div>
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
            <Button className="NewAddress" aria-hidden onClick={() => { console.log('success'); }}>
              + Add new address
            </Button>
            <div className="Border" />
            <p>
              SUMMARY
            </p>
            <div className="Summary">
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
                <p>Total:</p>
                <p>36$</p>
              </div>
              <Button className="Order" aria-hidden onClick={() => { console.log('success'); }}>
                Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartConfirm;
