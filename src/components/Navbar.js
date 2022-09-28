import { Link } from 'react-router-dom'

const Navbar = () => {

    return ( 
        <div>
            <nav>
                <div>
                    HomeAway Restaurants
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to='/'>LandingPage</Link>
                        </li>
                        <li>
                            <Link to='/aboutus'>About Us</Link>
                        </li><li>
                            <Link to='/menu'>Menu</Link>
                        </li><li>
                            <Link to='services'>Services</Link>
                        </li><li>
                            <Link to='contactus'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;