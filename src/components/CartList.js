import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';
import CheckoutButton from './CheckoutButton';

const CartList = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleQuantityChange = (e, id) => {
    const quantity = parseInt(e.target.value);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <div>
      {state.items.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <div className="product-grid"> 
          {state.items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemove} 
              onQuantityChange={handleQuantityChange} 
            />
          ))}
        </div>
      )}
      <TotalPrice />
      <CheckoutButton />
    </div>
  );
};

export default CartList;
        