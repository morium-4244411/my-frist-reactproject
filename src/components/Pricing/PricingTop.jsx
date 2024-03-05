import React from 'react'
import PricingLeft from './PricingLeft'
import PricingRight from './PricingRight'
function PricingTop() {
    return (
        <div className='lg:flex justify-between gap-5 mb-20'>
            <PricingLeft />
            <PricingRight />
        </div>
    )
}

export default PricingTop