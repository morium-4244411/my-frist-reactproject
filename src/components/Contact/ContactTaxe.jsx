import React from 'react'
import ContactIn from './ContactIn'
import contact1 from '../../Assest/contact1.svg'
import contact2 from '../../Assest/contact2.svg'
import contact3 from '../../Assest/contact3.svg'
import ContactLink from './ContactLink'
function ContactTaxe() {
    return (
        <div className='w-full lg:w-[50%] md:w-[50%]'>
            <ContactIn 
                Header="Contact Info"
                Icon={contact1}
                Title="+91 879 090 3780" />
            
            <ContactIn 
                Icon={contact2}
                Title="contact@yourmail.com" />
            
            <ContactIn
                Icon={contact3}
                Title="203, Envato Labs, Behind Alis Street, Australia" />
            
            <ContactLink 
            // ContactIcon={facebook}
            />
            
        </div>

    )
}

export default ContactTaxe