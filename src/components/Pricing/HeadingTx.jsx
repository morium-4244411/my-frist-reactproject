import React from 'react'

function HeadingTx({ icons, Title }) {
    return (
        <div className=' mt-5 lg:mt-0 w-[50%] bg-re-200 justify-center items-center  flex gap-3'>
            <img className='w-[35px] h-[35px] p-1 bg-[#4ade80] rounded-full' src={icons} alt="" />
            <p className=' text-lg text-[#1f2937] w-[120px]'>{Title}</p>
        </div>
    )
}

export default HeadingTx