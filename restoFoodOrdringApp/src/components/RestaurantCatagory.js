import React from 'react'
import ItemList from './ItemList';


export const RestaurantCatagory=({data})=> {
  return (
    <div>
      <div className='w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
        <div className='flex justify-between'>
        <span className='font-bold'>{data?.title} ({data?.itemCards?.length})</span> 
        <span>🔽</span>
        </div>
        
        <ItemList items={data?.itemCards}/>
      </div>
    </div>
    
  )
}

export default RestaurantCatagory;