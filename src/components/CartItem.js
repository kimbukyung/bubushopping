import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price.toLocaleString()}원</td>
      <td>
        <select value={item.quantity} onChange={(e) => onQuantityChange(e, item.id)}>
          {[...Array(10).keys()].map(x => (
            <option key={x+1} value={x+1}>{x+1}</option>
          ))}
        </select>
      </td>
      <td>{(item.price * item.quantity).toLocaleString()}원</td> 
      <td>
        <button onClick={() => onRemove(item.id)}>삭제</button>
      </td>
    </tr>
  );
};

export default CartItem;