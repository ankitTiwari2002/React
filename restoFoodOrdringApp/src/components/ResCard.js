
import { CDN_URL } from "../utils/constants";

const ResCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    //const Img=CDN_URL+cloudinaryImageId;
    return(
      
        <div className='card'>
            <img src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
            
        </div>
    )
}
export default ResCard