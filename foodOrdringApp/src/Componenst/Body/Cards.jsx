import PropTypes from 'prop-types';
import { CDN_URL } from "../../utils/constants";
import url from "url";

function Cards({ img, name, cuisines, rating }) {
  const imageUrl = url.resolve(img, CDN_URL);

  return (
    <div className='w-36 h-52 bg-gray-200 border-black hover:border-2 m-5 rounded-lg'>
      <img className='w-36 h-36 rounded-lg' src={imageUrl} alt="food image" />
      <h2>{name}</h2>
      <p className='font-light text-sm'>{cuisines}</p>
      <h3>Rating: {rating}</h3>
    </div>
  );
}

Cards.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.array.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Cards;
