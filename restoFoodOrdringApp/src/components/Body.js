import ResCard from "./ResCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    const [res,setRes]=useState(resList)
    return(
        <div className='body'>
            <div className="filter-btn">
            <button onClick={()=>{
                const filterRestorent=res.filter(resto=>resto?.info?.avgRating>4);
                setRes(filterRestorent);
             }
            }>Top Reated Restaurent</button>
            </div>
            <div className='res-container'>
             { 
                res.map((restorent)=>(
                  <ResCard key={restorent?.info?.id} resData={restorent}/>
                ))
              }
                
                
            </div>
        </div>
    )
}
export default Body;