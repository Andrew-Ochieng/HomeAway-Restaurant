// import Subscribe from "./Subscribe";

const Footer = () => {
    return ( 
        <div className="bg-[#959E61] md:px-16 px-8 md:py-16 py-8">
            <div className="md:flex md:justify-between justify-between items-center md:space-y-0 space-y-8">
                <div className="md:w-1/4 w-full">
                    <h1 className="md:text-2xl text-xl font-semibold">Home-Away</h1>
                    <p className="my-2">
                        This is a type of restaurant which typically serves food and drinks, in 
                        addition to light refreshments from baked foods or snacks.
                    </p>
                    <div className="flex  md:text-2xl text-lg text-gray-800">
                        <i class="hover:text-white sm:mr-2 mr-1 fa fa-whatsapp"></i>
                        <i class="hover:text-white sm:mx-2 mx-1 fa fa-facebook"></i>
                        <i class="hover:text-white sm:mx-2 mx-1 fa fa-instagram"></i>
                        <i class="hover:text-white sm:mx-2 mx-1 fa fa-linkedin"></i>
                    </div>
                </div>

                <div>
                    <h1 className="md:text-xl text-lg text-white font-medium">Services</h1>
                    <div>
                        <p>Online-Order</p>
                        <p>Pre-preservation</p>
                        <p>24/7 Services</p>
                        <p>Foodie Place</p>
                        <p>Super Chefs</p>
                    </div>
                </div>
                <div>
                    <h1 className="md:text-xl text-lg text-white font-medium">Quick Links</h1>
                    <div>
                        <p>Menu</p>
                        <p>Reviews</p>
                        <p>Blogs</p>
                        <p>Reservable Foods</p>
                        <p>Order Foods</p>
                    </div>
                </div>
                <div>
                    <h1 className="md:text-xl text-lg text-white font-medium">Help</h1>
                    <div>
                        <p>Contact</p>
                        <p>Support</p>
                        <p>FAQ</p>
                    </div>
                </div>

                
            </div>
        </div>
     );
}
 
export default Footer;