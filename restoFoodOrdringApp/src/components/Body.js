import ResCard from "./ResCard";

import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
const Body=()=>{
    const [res,setRes]=useState([]);
    const [filterRes,setFilterRes]=useState([]);
    const [text,setText]=useState("")
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData=async()=>{
      const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json=await data.json();
      console.log(json);
       setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(res.length===0){
      return <ShimmerUI/>
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
                  <ResCard key={restorent?.info?.id} resData={restorent}/>
                ))
              }
                
                
            </div>
        </div>
    )
}
export default Body;