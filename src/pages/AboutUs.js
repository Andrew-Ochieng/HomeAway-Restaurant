import React from "react";
import Image from "../components/image";
import Customerpic from "../components/customersPIc";

const AboutUs = () => {
    
    function Search() {
        console.log('Searching...');
    }

    return ( 
        <div className="lg:mx-32 md:mx-16 mx-8 md:my-16 my-8">
            <div className="sm:flex ">
                <div>
                    <h1 className="md:text-4xl text-2xl">We serve the test you love</h1>
                    <p>We serve the test of restuarant which typically serves foods and drinks in addition to light refreshners such as baked goods or snack.</p>
                    <input type="search" id="mySearch" name="q" />
                    <button onClick={Search}>
                        Search
                    </button>
                </div>
                <div className="lg:w-2/3 md:w-3/4 w-full">
                    <Image/>
                </div>
            </div>

             <h2>Our chefs</h2>
             <Image/>

            <h3>What our customers says?</h3>
            <hr></hr>


            <div className="WhatCustomersSays">     
                <Customerpic/>
            </div>      
            
        </div>
     );
}
 
export default AboutUs;