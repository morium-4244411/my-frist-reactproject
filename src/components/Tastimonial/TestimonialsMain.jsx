import React from 'react'
import TestimonialText from './TestimonialText'
import ClientsItems from './ClientsItems'
function TestimonialsMain() {
    return (
        <div id='testimonials' className='w-[90%] mx-auto'>
            <TestimonialText />
            <ClientsItems />
        </div>
    )
}

export default TestimonialsMain