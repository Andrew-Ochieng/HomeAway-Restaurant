import About from "../components/About";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Reservation from "../components/Reservation";
import Subscribe from "../components/Subscribe";
import TestimonialCard from "../components/TestimonialCard";

const LandingPage = () => {
    return ( 
        <div>
            <Hero />
            <Popular />
            <About />
            <Reservation />
            <div className="flex justify-center items-center">
                <Subscribe />
            </div>

            <TestimonialCard />
        </div>
     );
}
 
export default LandingPage;