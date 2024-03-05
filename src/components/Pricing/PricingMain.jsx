import React from 'react'
import PricingTop from './PricingTop'
import PricingCardMain from './PricingCardMain'

function PricingMain() {
    return (
        <div id='pricing' className='w-[90%] mx-auto'>
            <div>
                <PricingTop />
                <PricingCardMain />
            </div>
        </div>
    )
}

export default PricingMain