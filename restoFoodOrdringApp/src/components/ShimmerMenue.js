// ShimmerMenu.js
import React from 'react';

const ShimmerMenu = () => {
  return (
    <div className="shimmer-menu p-4">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-menu-item bg-gray-200 h-12 mb-4 rounded-md animate-shimmer"></div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
