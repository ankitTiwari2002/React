import React, { useState,useEffect } from 'react'
import { MENUE_API } from './constants';

function useRestaurantMenue(resId) {
    const [resInfo,setResInfo]=useState(null)

    useEffect(() => {
        fetchMenue();
      },[]);
    
      const fetchMenue = async () => {
        const data = await fetch(MENUE_API + resId);
        const json = await data.json();
        setResInfo(json.data);
      };
    

    return resInfo; 
}

export default useRestaurantMenue