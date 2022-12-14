const Hero = () => {
    // 61959E, 959E61


    return ( 
        
        <div>
            <div className="md:my-16 my-8 xl:mx-32  sm:mx-12 mx-6">
                <div className="md:flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <h1 className="lg:text-6xl md:text-4xl text-xl font-semibold text-[#61959E]">
                            We Serve the Taste You Love 😊
                        </h1>
                        <p className="md:my-8 my-4 lg:text-xl sm:text-base  text-gray-800"> 
                            This is a type of restaurant which typically serves food and drinks, in addition
                            to light refreshments such as baked goods or snacks. The term comes from the italian word meaning 
                            <span className="text-[#959E61] mx-1">home away from home</span>
                        </p>
                        <div className="my-4 md:flex items-center">
                        <button className="lg:mr-4 my-2 px-4 md:py-4 py-3 font-medium shadow-lg hover:shadow-xl hover:bg-[#426d74] bg-[#61959E] text-white rounded-full">
                                Explore Foods
                            </button>
                            <input 
                                type="search" 
                                placeholder="Search menu.." 
                                className="md:m-4 my-2 px-4 md:py-4 py-3 border-2 shadow-md hover:shadow-lg border-[#61959E] text-gray-800 rounded-full" 
                                />
                        </div>
                    </div>

                    <div>
                        <img className="md:rounded-tl-3xl md:rounded-br-3xl md:rounded-none rounded-xl" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;