import React from 'react'
import Clients from './Clients'
import test1 from '../../Assest/test1.png'
import test2 from '../../Assest/test2.png'
import test3 from '../../Assest/test3.png'
import test4 from '../../Assest/test4.png'
function ClientsItems() {
    return (
        <div className='w-full md:flex lg:flex flex-wrap xl:flex-nowrap gap-5 justify-between'>
            <Clients
                Image={test1}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                Name="Celia Almeda"
                title="Web Developer"
            />
            <Clients
                Image={test2}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                Name="Nat Reynolds"
                title="Android Developer"
            />
            <Clients
                Image={test3}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                Name="Bob Roberts"
                title="UI/UX Designer"
            />
            <Clients
                Image={test4}
                myself="Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro."
                Name=" Mattie Smith"
                title="Full Stack Developer"
            />
        </div>
    )
}

export default ClientsItems