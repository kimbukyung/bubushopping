import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; // CartContext를 가져와서 장바구니 상태를 관리
import ProductItem from './ProductItem'; // 개별 상품을 렌더링할 ProductItem 컴포넌트를 가져옴

// 상품 데이터 배열
const PRODUCTS = [
  { id: 1, name: '블루체크무늬고급후드집업', price: 10000, image: 'https://i.pinimg.com/1200x/15/70/ce/1570ce8b2b37a394080887d4054a2060.jpg' },
  { id: 2, name: 'I love NERDS', price: 20000, image: 'https://i.pinimg.com/1200x/b4/25/00/b42500d03a5bdf3750fb717ac3199b3b.jpg' },
  { id: 3, name: '애브리바디에일리언', price: 15000, image: 'https://i.pinimg.com/1200x/2c/10/12/2c1012902cb219e7529fd4a74e57501f.jpg' },
];

// ProductList 컴포넌트 정의
const ProductList = () => {
  const { dispatch } = useContext(CartContext); // CartContext에서 dispatch 함수를 가져옴
  const [quantities, setQuantities] = useState({}); // 상품 수량 상태를 관리하기 위한 useState 훅

  // 장바구니에 상품 추가하는 함수
  const handleAddToCart = (product) => {
    const quantity = parseInt(quantities[product.id]) || 1; // 선택된 수량 또는 기본값 1
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } }); // 장바구니에 상품 추가
  };

  // 수량 변경 시 호출되는 함수
  const handleQuantityChange = (e, id) => {
    setQuantities({ ...quantities, [id]: e.target.value }); // 선택된 수량 상태 업데이트
  };

  // 컴포넌트 렌더링
  return (
    <div className="product-grid"> {/* 모든 상품을 그리드 형태로 표시 */}
      {PRODUCTS.map(product => ( // PRODUCTS 배열을 순회하며 각 상품을 렌더링
        <ProductItem 
          key={product.id} // 각 상품의 고유 키
          product={product} // 상품 데이터 전달
          onAddToCart={handleAddToCart} // 장바구니 추가 함수 전달
          onQuantityChange={handleQuantityChange} // 수량 변경 함수 전달
          quantity={quantities[product.id]} // 현재 수량 전달
        />
      ))}
    </div>
  );
};

export default ProductList; // 컴포넌트 내보내기
