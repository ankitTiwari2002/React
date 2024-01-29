import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err=useRouteError();
  return (
    <div>
        <h1>oops!!</h1>
        <h2>Somthing went wrong!!</h2>
        <h3>{err.status}</h3>
        
    </div>    
  )
}

export default Error