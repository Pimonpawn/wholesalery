import { HeartFilled } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import './index.scss';

const CardLike = ():JSX.Element => {
  const aa = 'a';
  return (
    <div className="CardLike">
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
          <p>aaaa kfmlsadkmlkd afmskldfmklsmf falksdmfksamf</p>
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

export default CardLike;
