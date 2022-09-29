import About from "../components/About";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Subscribe from "../components/Subscribe";

const LandingPage = () => {
    return ( 
        <div>
            <Hero />
            <Popular />
            <About />
            <div className="flex justify-center items-center">
                <Subscribe />
            </div>
        </div>
     );
}
 
export default LandingPage;