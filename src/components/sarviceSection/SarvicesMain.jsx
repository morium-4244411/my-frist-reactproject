import React from 'react'
import ServiceLeft from './SarviceLeft'
import ServiceRight from './SarviceRight'
function ServicesMain() {
    return (
        <div id='services' className='w-[90%] mx-auto lg:flex justify-between items-center'>
            < ServiceLeft />
            < ServiceRight />
        </div>
    )
}

export default ServicesMain