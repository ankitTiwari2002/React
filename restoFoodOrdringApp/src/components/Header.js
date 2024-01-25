import { LOGO_URL } from "../utils/constants"
 const Header=()=>{
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
                </ul>
            </div>
        </div>
    );
}
export default Header;