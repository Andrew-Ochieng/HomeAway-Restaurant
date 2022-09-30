

const Reservation = () => {
    return ( 
        <>
            <div className="md:my-16 my-8 xl:mx-32  sm:mx-12 mx-6">
                <div className="md:flex flex-row justify-around md:space-x-16">
                    <div className="flex flex-col justify-center ">
                        <h1 className="lg:text-4xl md:text-2xl text-lg font-medium text-[#61959E]">
                            Do You Have Any Dinner Plan Today? Reserve Your Table
                        </h1>
                        <p className="md:my-8 my-4 lg:text-xl sm:text-base  text-gray-800"> 
                            Make online reservations, read restaurant reviews from diners, and earn
                            points towards free meals. Open Table is real-time online reservation.
                        </p>
                        <div className="my-4 md:flex items-center">
                            <button className="lg:mr-4 my-2 px-4 md:py-4 py-3 font-medium shadow-lg hover:shadow-xl hover:bg-[#426d74] bg-[#61959E] text-white rounded-full">
                                Make Reservation
                            </button>
                        </div>
                    </div>

                    <div>
                        <img className="md:rounded-tl-3xl md:rounded-br-3xl md:rounded-none rounded-xl" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                </div>
            </div>
        
        </>
     );
}
 
export default Reservation;