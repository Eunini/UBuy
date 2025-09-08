import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const { id } = useParams();
  const product = DATA.find((x) => x.id === id);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(product));
      setCartBtn('Add to Cart');
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.img} alt={product.title} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <hr className="my-4" />
          <h2 className="text-2xl font-semibold mb-4">${product.price}</h2>
          <p className="text-lg mb-4">{product.desc}</p>
          <button onClick={() => handleCart(product)} className="btn btn-primary">
            {cartBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;