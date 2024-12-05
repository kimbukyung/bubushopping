import React from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom'; // Link import 추가

const MainPage = () => {
  return (
    <div>
      <h1> tenten-shop</h1>
      <ProductList />
      <Link to="/cart" className="cart-link">장바구니로 이동</Link> {/* 카트 페이지로 이동하는 링크 추가 */}
    </div>
  );
};

export default MainPage;