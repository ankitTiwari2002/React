import React from 'react';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItemClick = (item) => {
    // Add item functionality here
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex justify-between items-center p-4 my-4 bg-white shadow-md rounded-lg">
          <div className="flex flex-col">
            <div className="font-medium text-lg text-gray-800 mb-2">
              <span>{item?.card?.info?.name}</span>
              <span className="ml-2 text-gray-600">- ₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-sm text-gray-600">{item?.card?.info?.description}</p>
          </div>
          <div className="relative">
            {item?.card?.info?.imageId && (
              <img className="w-32 h-32 object-cover rounded-lg" src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
            )}
            <button
              className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
              onClick={() => handleAddItemClick(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;


