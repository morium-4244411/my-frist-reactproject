import React from 'react'

function FooterLInk({ Img }) {
    return (
        <a href="#">
            <img src={Img} alt="SocialLink" className='w-[40px] h-[40px] bg-[white] rounded-full p-2 inline-blck hover:bg-[#16a34a]' />
        </a>
    )

}
export default FooterLInk