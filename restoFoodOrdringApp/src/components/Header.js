import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
 const Header=()=>{
    const [log,setLog]=useState("login");
    return(
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL}/>
            </div>
            <div className='nav-container'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contect Us</li>
                    <li>Cart</li>
                    <button className='log-btn'
                     onClick={()=>{log=='login'?setLog('logout'):setLog('login');}}>{log}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;