import { Link } from 'react-router-dom'
// import { useState } from 'react';
// #61959E && #959E61
const Navbar = () => {
    // toggle navbar
    // const [menu, setMenu] = useState("")
    
    // function showMenu() {
        
    // }


    return ( 
        <div>
            <nav className='bg-[#959E61]'>
                <div className='flex justify-between items-center p-6'>
                    <div className='flex justify-between items-center'>
                        <Link to='/' className='md:text-2xl text-xl font-semibold'>Home-Away</Link>
                    
                        <button id="hambuger" class="md:hidden text-2xl">
                            <i onclick="showMenu()" class="fa fa-bars cursor-pointer"></i>
                        </button>

                        <button id="times" class="text-2xl hidden">
                            <i onclick="hideMenu()" class="fa fa-times cursor-pointer"></i>
                        </button>
                    </div>

                    <div>
                    <ul id="menu" class="md:flex hidden items-center text-[#1a2238] font-semibold md:text-xl text-lg">
                            <li className='mx-4'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='mx-4'>
                                <Link to='/aboutus'>About Us</Link>
                            </li>
                            <li className='mx-4'>
                                <Link to='/menu'>Menu</Link>
                            </li>
                            <li className='mx-4'>
                                <Link to='services'>Services</Link>
                            </li>
                            <li className='mx-4'>
                                <Link to='contactus'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;