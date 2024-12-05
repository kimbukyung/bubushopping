import React from 'react';

const ProductItem = ({ product, onAddToCart, onQuantityChange, quantity }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>가격: {product.price.toLocaleString()}원</p>
      <div className="quantity">
        <label>수량: </label>
        <select onChange={(e) => onQuantityChange(e, product.id)} value={quantity || 1}>
          {[...Array(10).keys()].map(x => (
            <option key={x+1} value={x+1}>{x+1}</option>
          ))}
        </select>
      </div>
      <button onClick={() => onAddToCart(product)}>카트에 담기</button>
    </div>
  );
};

export default ProductItem;