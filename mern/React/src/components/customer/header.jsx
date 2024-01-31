import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";


function header() {
    return (

        <div className='h-35 w-full flex flex-col '>
            <div className='h-1/5 w-full flex justify-between p-4 bg-blue-700 text-white' >
                <div className='w-24 flex justify-between hover:cursor-pointer'>
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
                <div className=' w-[40%] h-[10%] flex'>
                    <input placeholder='Search for Products' className=' p-5 w-full h-full text-white rounded-xl ' />
                    <button className="bg-white ml-2"><FaSearch size={30} /></button>
                </div>
                <div className='w-28 flex justify-around hover:cursor-pointer'>
                    <IoPersonOutline size={28} onClick={() => { }} />
                    <LuShoppingCart size={28} />
                </div>
            </div>
            <hr />
            <div className=' w-full flex justify-between bg-white p-4' >
                <div className='w-3/5 flex justify-evenly '>
                    <a className="hover:cursor-pointer" onClick={() => { }}>Home</a>
                    <a className="hover:cursor-pointer">Shop</a>
                    <a className="hover:cursor-pointer">Blog</a>
                    <a className="hover:cursor-pointer">Contact</a>
                </div>
                <div>
                    <p>Upto 60% off on all items</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default header