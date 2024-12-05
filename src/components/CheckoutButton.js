import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutButton = () => {
  const { dispatch } = useContext(CartContext);

  const handleCheckout = () => {
    alert('결제가 완료되었습니다!');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <button onClick={handleCheckout}>결제하기</button>
  );
};

export default CheckoutButton;