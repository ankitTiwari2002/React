import React from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</h4>
        <div className="flex items-center mb-2">
          <span className="mr-1 text-yellow-500">{avgRating}</span>
          <svg
            className="w-4 h-4 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.641,1.765c0.318-0.955,2.709-0.955,3.026,0l1.303,3.912c0.083,0.251,0.315,0.436,0.588,0.485l4.186,0.604c1.064,0.154,1.488,1.467,0.645,2.191l-3.369,2.459c-0.303,0.221-0.423,0.597-0.301,0.932l1.273,3.854c0.252,0.763-0.661,1.378-1.322,0.984l-3.33-2.291c-0.289-0.199-0.646-0.199-0.935,0l-3.33,2.291c-0.661,0.396-1.574-0.221-1.322-0.984l1.273-3.854c0.122-0.336,0.002-0.712-0.301-0.932L2.342,9.051c-0.843-0.724-0.419-2.037,0.645-2.191l4.186-0.604c0.273-0.049,0.505-0.234,0.588-0.485L9.641,1.765z" />
          </svg>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">
            Cost for two:
          </span>
          <span className="text-sm font-semibold text-gray-700">
            {costForTwo}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold text-gray-700">
            Delivery Time:
          </span>
          <span className="text-sm font-semibold text-gray-700">
            {resData?.info?.sla?.deliveryTime} minutes
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
