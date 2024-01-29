import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';
import useRestaurantMenue from '../utils/useRestaurantMenue';

function RestoMenue() {
  const { resId } = useParams();
  const resInfo=useRestaurantMenue(resId);
  
  if (resInfo === null) return <ShimmerUI />;

  const restorentInfo = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[4]?.card.card;

  return (
    <div className='menue-container'>
      <h1>{restorentInfo.name}</h1>
      <p>{restorentInfo.cuisines.join(', ')} - {restorentInfo.costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}{item.card.info.price / 100}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RestoMenue;
