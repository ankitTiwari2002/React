import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 const Header=()=>{
    const [log,setLog]=useState("login");
    let onlineStatus=useOnlineStatus();
    return(
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL}/>
            </div>
            <div className='nav-container'>
                <ul>
                    <li>Online startus: {onlineStatus?"✅":"🔴"}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contect Us</Link></li>
                    <li>Cart</li>
                    <button className='log-btn'
                     onClick={()=>{log=='login'?setLog('logout'):setLog('login');}}>{log}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;