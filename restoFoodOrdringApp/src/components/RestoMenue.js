
import React from 'react';
import ShimmerMenu from './ShimmerMenue';
import { useParams } from 'react-router-dom';
import useRestaurantMenue from '../utils/useRestaurantMenue';
import RestaurantCatagory from './RestaurantCatagory';

function RestoMenue() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenue(resId);
  
  if (resInfo === null) return <ShimmerMenu />;

  const restorentInfo = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[4]?.card.card;
  
  const catagories=resInfo.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c)=> c?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  console.log(catagories);
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">{restorentInfo.name}</h1>
        <p className="text-lg text-gray-600 text-center mb-8">{restorentInfo.cuisines.join(', ')} - {restorentInfo.costForTwoMessage}</p>
        <div className="max-w-2xl mx-auto">
          {
          catagories.map((catagory)=>{
              return <RestaurantCatagory data={catagory?.card?.card}/>
            })
          }
        </div>
      </div>
      
    </div>
  );
}

export default RestoMenue;