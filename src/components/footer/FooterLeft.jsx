import React from 'react'
import FooterLink from './FooterLink'
import facebook from '../../Assest/facebook.svg'
import instgram from '../../Assest/instgram.svg'
import twiter from '../../Assest/twiter.svg'
import youtube from '../../Assest/youtube.svg'



function FooterLeft() {
    return (
        <div className='w-full lg:w-[45%] text-center lg:text-left'>
            <a href="#" className='logo text-[#28B463] text-3xl lg:text-4xl font-bold' >DEBUG ENTITY</a>
            <p className=' text-xl text-white mt-5 lg:pr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore tenetur id tempore dolor nisi perspiciatis alias modi quos laboriosam.</p>
            <div className='flex gap-5 mt-9 justify-center lg:justify-start'>
                <FooterLink
                    Img={facebook}
                />
                <FooterLink
                    Img={instgram}
                />
                <FooterLink
                    Img={twiter}
                />
                <FooterLink
                    Img={youtube}
                />
            </div>


        </div>
    )
}

export default FooterLeft