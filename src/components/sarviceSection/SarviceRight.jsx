import React from 'react'
import icon1 from '../../Assest/icon1.svg'

import CardItems from './CardItems'

function ServiceRight() {
    return (
        <div className='w-full flex lg:w-[50%] flex-wrap gap-5 lg:gap-3 xl:gap-5 justify-center text-center'>
            <CardItems
                icon={icon1}
                Heading="SSL Certificate"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={icon1}
                Heading="Personal Domain"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={icon1}
                Heading="Media Storage"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={icon1}
                Heading="Code Editor"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
        </div>
    )
}

export default ServiceRight