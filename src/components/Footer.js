// import Subscribe from "./Subscribe";

const Footer = () => {
    const servicesLinks = ['Online Order', 'Pre-preservation', '24/7 Services', 'Foodie Place', 'Super Chefs']
    const quickLinks = ['Menu', 'Reviews', 'Blogs', 'Reservable Foods', 'Order Foods']
    const helpLinks = ['Contact', 'Support', 'FAQ']
    
    return ( 
        <div className="bg-[#959E61] md:px-16 px-8 md:py-16 py-8">
            <div className="md:flex justify-between md:space-y-0 space-y-8">
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
                        {
                            servicesLinks.map((servicesLink) => (
                                <p>
                                    <a href="#">{servicesLink}</a> 
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="md:text-xl text-lg text-white font-medium">Quick Links</h1>
                    <div>
                    {
                            quickLinks.map((quickLink) => (
                                <p>
                                    <a href="#">{quickLink}</a> 
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="md:text-xl text-lg text-white font-medium">Help</h1>
                    <div>
                        {
                            helpLinks.map((helpLink) => (
                                <p>
                                    <a href="#">{helpLink}</a> 
                                </p>
                            ))
                        }
                    </div>
                </div>

                
            </div>
        </div>
     );
}
 
export default Footer;