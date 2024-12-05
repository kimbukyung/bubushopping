import React from 'react';
import CartList from '../components/CartList';
import { Link } from 'react-router-dom'; // Link import 추가

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>장바구니</h1>
      <CartList />
      <Link to="/" className="back-link">상품 목록으로 돌아가기</Link> {/* 메인 페이지로 돌아가는 링크 추가 */}
    </div>
  );
};

export default CartPage;