import React from 'react'
import FooterText from './FooterText'

function FooterRight() {
    return (
        <div className='flex-wrap justify-between mb-7 lg:w-[55%] flex lg:flex-row lg:justify-around'>
            <FooterText itemsHead="PAGES" isHome="home" Services="Services" Testimonials="Testimonials"isPricing="Pricing" isContact="Contact" />
            <FooterText itemsHead="PAGES" isHome="home" Services="Services" Testimonials="Testimonials"isPricing="Pricing" isContact="Contact" />
            <FooterText itemsHead="PAGES" isHome="home" Services="Services" Testimonials="Testimonials"isPricing="Pricing" isContact="Contact" />
            
        </div>
    )
}

export default FooterRight