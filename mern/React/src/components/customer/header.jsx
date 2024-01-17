import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function header() {
    return (

        <div className='h-full w-full flex flex-col text-black'>
            <div className='h-1/5 w-full flex justify-between p-4 bg-rose-500' >
                <div className='w-24 flex justify-between'>
                    <FaInstagram size={20} />
                    <FaFacebook size={20} />
                    <FaTwitter size={20} />
                </div>
                <div>
                    <p>Free Home delivery over PKR 2000 </p>
                </div>
                <div>
                    <p>Help</p>
                </div>
            </div>
            <div className='h-full w-full flex items-center justify-between p-4 mt-4 ' >
                <div className='text-3xl'>
                    My Store
                </div>
                <div className=' w-[40%] h-[10%]'>
                    <input placeholder='Search for Products' className=' p-5 w-full h-full  rounded-xl ' />
                </div>
                <div className='w-40 flex justify-between'>
                    <FaInstagram size={28} />
                    <FaFacebook size={28} />
                    <FaTwitter size={28} />
                </div>
            </div>
            <div className='h-full w-full flex justify-between p-4' >
                <div className='w-3/5 flex justify-evenly'>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div>
                    <p>Upto 60% off on all items</p>
                </div>
            </div>
        </div>
    )
}

export default header