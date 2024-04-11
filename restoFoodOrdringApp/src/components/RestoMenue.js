import React, { useState } from "react";
import ShimmerMenu from "./ShimmerMenue";
import { useParams } from "react-router-dom";
import useRestaurantMenue from "../utils/useRestaurantMenue";
import RestaurantCatagory from "./RestaurantCatagory";

function RestoMenue() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenue(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const catagories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
        <div className="max-w-2xl mx-auto">
          {catagories.map((catagory, index) => (
            <RestaurantCatagory
              key={catagory?.card?.card?.itemCards?.card?.info?.id}
              data={catagory?.card?.card}
              showItems={index == showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestoMenue;
