import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className='w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg'>
        <div className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
          <span className='font-bold'>{data?.title} ({data?.itemCards?.length})</span> 
          <span>🔽</span>
        </div>
        
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
