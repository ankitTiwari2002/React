import React, { useState } from 'react'

function useOnlineStatus() {
    const [onlineStatus,setOnlineStatus]=useState(true);
    
    window.addEventListener('offline', ()=>{
        setOnlineStatus(false)
    });
    window.addEventListener('online',()=>{
        setOnlineStatus(true)
    });
    
    return onlineStatus;
}

export default useOnlineStatus;