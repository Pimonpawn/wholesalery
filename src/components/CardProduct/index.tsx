import { HeartFilled } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import './index.scss';

const CardProducts = ():JSX.Element => {
  const a = '';
  return (
    <div className="CardProducts">
      <img src="//:0" alt="" title="Gold" />
      <div className="Detail">
        <div className="ProductDetail">
          <p className="ProductName">
            Product Name
          </p>
          <p className="Price">
            $ 20
          </p>
          <Rate className="Rate" allowHalf disabled defaultValue={2.5} />
          <Button aria-hidden onClick={() => console.log('success')}>
            Add to cart
          </Button>
        </div>
        <div aria-hidden onClick={() => console.log('Like it')} className="Like">
          <HeartFilled />
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
