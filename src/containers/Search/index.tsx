import { useState } from 'react';
import {
  Checkbox, Radio, Input, Space,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import './index.scss';
import CardLike from '../../components/CardLike';

const Search = (): JSX.Element => {
  const [pricePreUnit, setPricePreUnit] = useState<string | null>(null);
  const [hideOrder, setHideOrder] = useState<string>('flex');
  const [hideMinimum, setHideMinimum] = useState<string>('flex');
  const [hidePrice, setHidePrice] = useState<string>('flex');

  return (
    <div className="Search">
      <TopNavigation />
      <div className="Ads">
        aa
      </div>
      <div className="Body">
        <div className="Category">
          <div className="HeadClear">
            Clear all
          </div>
          <div className="Head">
            <div className="HeadFont">Category</div>
            <DownOutlined />
          </div>
          <div className="Head">
            <div className="HeadFont">Order Type</div>
          </div>
          <div className="SubMenu">
            <Checkbox>In Stock</Checkbox>
            <Checkbox>Pre-Order</Checkbox>
            <Checkbox>Quotation</Checkbox>
          </div>
          <div
            className="Head"
            aria-hidden
            onClick={(e) => {
              e.preventDefault();
              if (hideMinimum === 'flex') {
                setHideMinimum('none');
              } else {
                setHideMinimum('flex');
              }
            }}
          >
            <div className="HeadFont">Supplier minimum order</div>
            <DownOutlined />
          </div>
          <div className="RadioHead" style={{ display: hideMinimum }}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="Any">Any</Radio>
                <Radio value="No minimum">No minimum</Radio>
                <Radio value="$75 and below">$75 and below</Radio>
                <Radio value="$150 and below">$150 and below</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div
            className="Head"
            aria-hidden
            onClick={(e) => {
              e.preventDefault();
              if (hidePrice === 'flex') {
                setHidePrice('none');
              } else {
                setHidePrice('flex');
              }
            }}
          >
            <div className="HeadFont">Price per unit</div>
            <DownOutlined />
          </div>
          <div className="RadioHead" style={{ display: hidePrice }}>
            <Radio.Group
              value={pricePreUnit}
              onChange={(e) => {
                setPricePreUnit(e.target.value);
              }}
            >
              <Space direction="vertical">
                <Radio value="Any">Any</Radio>
                <Radio value="$0-$5">$0 - $5</Radio>
                <Radio value="$5-$10">$5 - $10</Radio>
                <Radio value="$10-$15">$10 - $15</Radio>
                <Radio value="$15-$20">$15 - $20</Radio>
                <Radio value="$20andabove">$20 and above</Radio>
                <Radio value="more">
                  {pricePreUnit === 'more'
                    ? (
                      <div>
                        <Input style={{ width: 43 }} />
                        &nbsp;
                        to
                        &nbsp;
                        <Input style={{ width: 43 }} />
                      </div>
                    )
                    : (
                      <div>
                        <Input disabled style={{ width: 43 }} />
                        &nbsp;
                        to
                        &nbsp;
                        <Input disabled style={{ width: 43 }} />
                      </div>
                    ) }

                </Radio>
              </Space>
            </Radio.Group>
          </div>

        </div>
        <div className="Product">
          <div style={{ paddingLeft: '50px' }}>
            Product
          </div>
          <div className="ProductDetail">
            <CardLike />
            <CardLike />
            <CardLike />
            <CardLike />
            <CardLike />
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Search;
