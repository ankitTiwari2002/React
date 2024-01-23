import { LOGO_URL } from "../../utils/constants"


function Header() {
  return (
    <div className='flex justify-between border-black m-5 mx-10'>
        <img className=' w-32' src={LOGO_URL}
         alt="logo" />
         <ul className=' flex mx-10 gap-5 cursor-pointer underline my-10'>
            <li>Home</li>
            <li>Contect Us</li>
            <li>Footer</li>
            <li>cart</li>
         </ul>
    </div>
  )
}

export default Header