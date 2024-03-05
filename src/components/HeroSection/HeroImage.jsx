import React from 'react'
import reactpic1 from '../../Assest/reactpic1.png'
function HeroImage() {
  return (
    <div className=' w-full md:w-[50%] lg:w-[50%] flex justify-center md:justify-end mt-16 lg:mt-0'>
        <img className='  truncate h-[400px]'
        src={reactpic1} alt="HeroImage w-full" />
    </div>
  )
}

export default HeroImage