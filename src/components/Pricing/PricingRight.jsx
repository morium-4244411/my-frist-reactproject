import React from 'react'
import HeadingTx from './HeadingTx'
import price from '../../Assest/price.svg'
function PricingRight() {
    return (
        <div className='lg:w-[50%] flex justify-center items-center flex-wrap'>
            <HeadingTx icons={price}  Title="Unlimited Pages" />
                
            <HeadingTx icons={price}  Title="Free Sub-Domain" />
                
            <HeadingTx icons={price}  Title="Unlimited Pages" />
                
            <HeadingTx  icons={price} Title="Free SSL Certificate" />
                
            <HeadingTx  icons={price} Title="Unlimited Pages" />
                
            <HeadingTx icons={price}  Title="24/7 Support" />
                
        </div>
    )
}

export default PricingRight