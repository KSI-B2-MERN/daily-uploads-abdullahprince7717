// import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



function ProductList() {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full flex justify-center mt-4 mb-4'>
            <div className='w-[90%] h-[95%] m-auto '>
                <div className='flex h-[10%] mb-3 justify-center'>
                    {/* <button className='rounded-3xl ' onClick={() => navigate("addproduct")}>Add Product</button> */}
                    <p className='font-bold text-5xl'>Products</p>
                </div>
                <div className=' w-full h-[20%] flex justify-center'>
                    <input placeholder='Search for Products' className='mt-4 p-5 w-[80%] h-[11%]  rounded-xl ' />
                </div>
                <div className='white-area w-full bg-white h-[70%] flex flex-col justify-center items-center text-black'>
                    <div className='action-btn w-full text-white m-2 flex justify-between p-3 '>
                        <button className='rounded-xl'>
                            Actions
                        </button>
                        <div className='Filters'>
                            <select className="w-20 h-7 mx-4" >
                                <option className='p-4' value="1">Nice</option>
                                <option value="2">2</option>
                            </select>
                            <select className="w-20 h-7" >
                                <option value="1">Wow</option>
                                <option value="2">2</option>

                            </select>
                        </div>
                    </div>
                    <div className='grey-area bg-gray-300 w-full h-[20%] flex  '>
                        <input className='h-10 p-2 m-1' type="checkbox" />
                        <div className='flex justify-around w-full'>
                            <p className="p-2">Img</p>
                            <p className="p-2">Name</p>
                            <p className="p-2">Created</p>
                            <p className="p-2">Price</p>
                            <p className="p-2">Stock</p>
                            <p className="p-2">Availability</p>
                        </div>
                    </div>
                    <hr className='' />
                    <div className='grey-area bg-gray-300 w-full h-[30%] flex pr-1'>
                        <input className='h-10 p-2 m-1 z-20' type="checkbox" />
                        <div className='flex justify-around w-full ' onClick={() => { navigate("editproduct", { route: true }) }}>
                            <p className="p-2 ">Img</p>
                            <p className="p-2">Name</p>
                            <p className="p-2">Created</p>
                            <p className="p-2">Price</p>
                            <p className="p-2">Stock</p>
                            <div className='px-2 py-3 ml-2 w-[9%] flex justify-between'>
                                <nav><FaRegEye /></nav>
                                <nav><IoLockOpenOutline /></nav>
                                <nav><CiHeart /></nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList