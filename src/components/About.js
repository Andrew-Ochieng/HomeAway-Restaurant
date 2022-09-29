const About = (props) => {
    // const aboutDescription = ['Online Order', 'Preservation', '24/7 Service', 'Organized Foodie Place', 'Clean Kitchen', 'Super Chefs']
    console.log(props)

    return ( 
        <div className="md:my-16 my-8 xl:mx-32  sm:mx-12 mx-6">
            <div className="md:flex">
                <div>
                    <img className="md:rounded-tl-3xl md:rounded-br-3xl md:rounded-none rounded-xl w-full" src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

                <div className="md:my-0 my-8">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold text-[#61959E]">
                        We Are More Than Multiple Service
                    </h1>
                    <p>
                        This is a type of restaurant which typically serves food and drinks, in 
                        addition to light refreshments from baked foods or snacks. The term 
                        comes from an italian word meaning home away from home
                    </p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;