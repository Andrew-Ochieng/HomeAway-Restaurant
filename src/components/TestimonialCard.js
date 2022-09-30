
const TestimonialCard = () => {
    const testimonials = [
        {
            content: 'This place is great! Atmosphere is chill and cool but the staff is also friendly. They know what they are doing and talking about, and you can tell making the customers happy is their main priority',
            clientImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            clientName: 'Savannah Nguyen'
        },
        {
            content: 'This place is great! Atmosphere is chill and cool but the staff is also friendly. They know what they are doing and talking about, and you can tell making the customers happy is their main priority',
            clientImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            clientName: 'Savannah Nguyen'
        },
        {
            content: 'This place is great! Atmosphere is chill and cool but the staff is also friendly. They know what they are doing and talking about, and you can tell making the customers happy is their main priority',
            clientImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            clientName: 'Savannah Nguyen'
        }
    ]
    return ( 
        <>
            <div className="md:mx-16 mx-8 md:my-32 my-16">
                <h1 className="lg:text-4xl md:text-2xl text-xl mb-3">What Our Customers Say</h1>
                <div className="sm:flex md:space-x-8 space-x-4 ">
                    {
                        testimonials.map((testimonial) => (
                            <div className="bg-gray-200 md:p-8 p-4 rounded-xl">
                                <p className="md:text-xl text-lg">" {testimonial.content} "</p>
                                <img className="rounded-full md:w-44 w-24 md:my-4 my-2" src={testimonial.clientImage} alt="" />
                                <h2 className="md:text-xl text-lg font-medium text-[#2e9fb3]">{testimonial.clientName}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        
        </>
     );
}
 
export default TestimonialCard;