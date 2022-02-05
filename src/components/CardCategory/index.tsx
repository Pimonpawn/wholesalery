import './index.scss';

const CardCategory = ():JSX.Element => {
  const aa = 'a';
  return (
    <div className="CardCategory">
      <div className="Left">
        <p className="Category">Categories</p>
        <p className="Product">128 Products</p>
        <p aria-hidden onClick={() => console.log('go to next page')} className="Shop">+ Shop Now</p>
      </div>
      <div className="Right">
        <img src="//:0" alt="" title="Gold" />
      </div>
    </div>
  );
};

export default CardCategory;
