import React from "react";

const ShimmerUI = () => {
  return (
    <div className="shimmer-container bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="shimmer-card bg-white rounded-md shadow-md p-4"
            >
              <div className="shimmer-image w-full h-40 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md mb-4 animate-shimmer"></div>
              <div className="shimmer-info">
                <div className="shimmer-name w-3/4 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md mb-2 animate-shimmer"></div>
                <div className="shimmer-cuisine w-1/2 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md mb-2 animate-shimmer"></div>
                <div className="shimmer-rating w-1/4 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md mb-2 animate-shimmer"></div>
                <div className="shimmer-price w-1/4 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md mb-2 animate-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
