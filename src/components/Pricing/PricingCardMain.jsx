import React from 'react'
import PricingCard from './PricingCard'
function PricingCardMain() {
    return (
        <div className='flex justify-between flex-wrap'>
            <PricingCard
                Plan="Starter Plan"
                money="Free"
                Button="Proceed Free"
                title="Free static.app domain included, No credit card"
            />
            <PricingCard
                Plan="Yearly Plan"
                money="$9/month"
                Button="Proceed Anually"
                title="Free static.app domain included, No credit card"
            />
            <PricingCard
                Plan="Monthly Plan"
                money="$12/month"
                Button="Proceed Monthly"
                title="Free static.app domain included, No credit card"
            />
        </div>
    )
}

export default PricingCardMain