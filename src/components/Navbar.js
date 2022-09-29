import { Link } from 'react-router-dom'

const Navbar = () => {
    // colors
    // #61959E && #959E61

    return ( 
        <div>
            <nav className='bg-[#959E61]'>
                <div className='flex justify-around items-center p-6'>
                    <div>
                        <Link to='/' className='md:text-xl text-lg font-semibold'>Home-Away</Link>
                    </div>

                    <div>
                        <ul className='flex justify-center items-center text-lg'>
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