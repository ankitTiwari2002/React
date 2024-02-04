import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center p-4 w-8/12 mx-auto">
      <button
        className="bg-black rounded-lg p-2 text-white"
        onClick={() => dispatch(clearCart())}
      >
        Clear
      </button>
      {cartItems.length === 0 && (
        <h1 className="text-red-600 font-bold">Cart is empty. Please add some items.</h1>
      )}
      {cartItems.length > 0 && <ItemList items={cartItems} />}
    </div>
  );
};

export default Cart;
