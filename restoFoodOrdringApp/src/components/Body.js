import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RESTO_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [res,setRes]=useState([]);
    const [filterRes,setFilterRes]=useState([]);
    const [text,setText]=useState("")
    const onlineStatus=useOnlineStatus();
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData=async()=>{
      const data= await fetch(RESTO_API);
      const json=await data.json();
      
       setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(onlineStatus===false) return <h3 className="offline">Looks like you're offline!! please check your internet conection</h3>
    if (!res || res.length === 0) {
      return <ShimmerUI />;
    }
  
    return(
        <div className='body'>
            <div className="filter-btn">
              <div className="search-container">
              <input className="search-input" type="text" placeholder="search for restaurants and food" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button className="filter-btn" onClick={()=>{
                const filterResto= res.filter((resto)=>resto?.info?.name?.toLowerCase()?.includes(text.toLowerCase()));
                setFilterRes(filterResto);
              }}>
                Search
              </button>
              </div>
            <button onClick={()=>{
                const filterRestorent=res.filter(resto=>resto?.info?.avgRating>4);
                setRes(filterRestorent);
             }
            }>Top Reated Restaurants</button>
            </div>
            <div className='res-container'>
             { 
                filterRes.map((restorent)=>(
                  <Link className="card-link" key={restorent?.info?.id} to={"/restorent/"+restorent?.info?.id}><ResCard  resData={restorent}/></Link>
                ))
              }
                
                
            </div>
        </div>
    )
}
export default Body;