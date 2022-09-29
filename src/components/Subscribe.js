const Subscribe = () => {
    return ( 
        <>
            <div className="sm:flex justify-between items-center bg-[#61959E] md:p-16 p-8 rounded-xl md:my-16 my-8 md:mx-0 mx-8">
                <div>
                    <h3 className="md:text-2xl text-lg font-medium font">Subscribe to Newsletter</h3>
                    <p>For best articles on healthy food and lifestyle</p>
                </div>

                <div className="sm:flex justify-center items-center ">
                    <input 
                        type="text" 
                        placeholder="Enter your email address..."
                        className="py-3 px-2 outline-none ring-red-400"
                        />
                    <input 
                        type="submit" 
                        value="Discover" 
                        className="py-3 px-2 bg-[#959E61] "
                        />
                </div>
            </div>
        
        </>

     );
}
 
export default Subscribe;