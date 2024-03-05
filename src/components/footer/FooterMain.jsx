import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'



function FooterMain() {
    return (
        <div className='w-[90%] lg:flex justify-between mx-auto'>
            <FooterLeft />
            <FooterRight />

           

        </div>
    )
}

export default FooterMain