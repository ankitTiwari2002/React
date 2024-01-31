import React from 'react'

const  ItemList=({items})=> {
  return (
    <div>
      
        {
          items.map((item)=>{
            <div key={item.card.info.id}>
              <span>{item.card.info.name}</span>
              <span>{item.card.info.price/100}</span>
              <p>{item.card.info.description}</p>
            </div>
          })
        }
      
    </div>
  )
}

export default ItemList;