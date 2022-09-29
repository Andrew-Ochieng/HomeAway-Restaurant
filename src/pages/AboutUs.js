import React from "react";
import Image from "../components/image";
import Customerpic from "../components/customersPIc";

const AboutUs = () => {
    
    function search() {
        alert('Searching...');
      }
    return ( 
        <div>
            <h1>We serve the test you love</h1>

            <p>We serve the test of restuarant which typically serves foods and drinks in addition to light refreshners such as baked goods or snack.</p>
            <input type="search" id="mySearch" name="q" />
            <button onClick={search}>
             search
             </button>
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