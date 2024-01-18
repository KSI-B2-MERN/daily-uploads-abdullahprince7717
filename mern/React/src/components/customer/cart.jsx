// import { useState } from "react";
import Footer from "./footer"

function Cart() {
    return (
        <div className="w-screen h-screen">
            <div className="w-full flex flex-col text-black p-12 bg-gray-200">
                <b className="text-3xl mb-20" >Your Shopping Cart</b>
                <div className="w-full flex justify-between">
                    <p className="text-xl">Products</p>
                    <div className="w-60 flex justify-between">
                        <p className="text-xl">Quantity</p>
                        <p className="text-xl">Price</p>
                    </div>
                    <hr />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart