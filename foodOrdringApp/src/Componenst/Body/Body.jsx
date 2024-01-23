
import Cards from "./Cards";
import { listOfRestorents } from "../../utils/mockdata";

function Body() {
  return (
    <div>
      <button 
        className='flex m-auto border-black border-2 bg-slate-500 px-2 py-1 rounded-lg'
        onClick={()=>{}}>Top Rated Restront</button>
      <div className='flex flex-wrap'>
        {listOfRestorents.map((restorent) => (
          <Cards 
            key={restorent.id} 
            img={restorent.data.cloudinaryImageId}
            name={restorent.data.name}  
            cuisines={restorent.data.cuisines} 
            rating={restorent.data.avgRating}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
