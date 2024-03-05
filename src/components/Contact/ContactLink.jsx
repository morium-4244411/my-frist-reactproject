import React from 'react'
import facebook from '../../Assest/facebook.svg'
import instgram from '../../Assest/instgram.svg'
import twiter from '../../Assest/twiter.svg'
import youtube from '../../Assest/youtube.svg'

function ContactLink(ContactIcon) {
    return (
        <div className='flex mt-9'>
            <a href="#">
                <img className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a]'
                src={facebook} alt=""
                 />
            </a>
            <a href="#">
                <img  className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a] ml-4'
                src={instgram} alt="" />
            </a>
            <a href="#">
                <img  className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a] ml-4'
                src={twiter} alt="" />
            </a>
            <a href="#">
                <img className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a] ml-4'
                src={youtube} alt="" />
            </a>
            
        </div>
    )
}

export default ContactLink