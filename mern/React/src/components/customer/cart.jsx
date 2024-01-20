// import { useState } from "react";
import Footer from "./footer"

function Cart() {
    return (
        <div className="w-screen h-screen">
            <div className="bg-gray-200 py-10">
                <b className="text-3xl px-20" >Your Shopping Cart</b>
                <div className="w-full grid grid-cols-[50%_20%_20%] grid-rows-2 gap-5 place-items-center  my-10">
                    <b >Product</b>
                    <b >Quantity</b>
                    <b >Price</b>
                    <div className="flex" >
                        <img className="w-28" src="https://picsum.photos/1000/700" alt="" />
                        <div className="flex flex-col ml-5" >
                            <p className='text-lg '>Product Name</p>
                            <p className='text-md'>Price</p>
                            <p className='text-md'>Review</p>
                        </div>
                    </div>
                    <div className='flex items-center bg-white'>
                        <button className='text-xl hover:bg-black hover:text-white  focus:outline-none'>-</button>
                        <p className='text-xl focus:outline-none'>1</p>
                        <button className='text-xl hover:bg-black hover:text-white  focus:outline-none'>+</button>
                    </div>
                    <div >Rs 6</div>
                </div>
                <div className="flex justify-end pr-52">
                    <div className="flex flex-col items-center">
                        <b className="text-xl">Total Price</b>
                        <b className="text-xl pt-2">Rs 6</b>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart