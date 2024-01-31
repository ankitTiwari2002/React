import React from 'react';
import ShimmerMenu from './ShimmerMenue';
import { useParams } from 'react-router-dom';
import useRestaurantMenue from '../utils/useRestaurantMenue';

function RestoMenue() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenue(resId);
  
  if (resInfo === null) return <ShimmerMenu />;

  const restorentInfo = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[4]?.card.card;

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">{restorentInfo.name}</h1>
        <p className="text-lg text-gray-600 text-center mb-8">{restorentInfo.cuisines.join(', ')} - {restorentInfo.costForTwoMessage}</p>
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            {itemCards &&
              itemCards.map((item) => (
                <li key={item.card.info.id} className="border-b py-2">
                  <div className="flex justify-between items-center">
                    <span>{item.card.info.name}</span>
                    <span className="text-green-600 font-semibold">Rs. {item.card.info.price / 100}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestoMenue;
