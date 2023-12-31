import { useState } from 'react'

function ProductList() {
    return (
        <div className='w-full h-full'>
            <p>Product</p>
            <div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-1/4 bg-gray-400 m-2 p-2">
                        <img src="https://images.unsplash.com/photo-1621574533668-4d6b8f4e6f6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwcHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <p className="text-center">Product Name</p>
                        <p className="text-center">Price</p>
                        <p className="text-center">Quantity</p>
                    </div>
                    <div className="w-1/4 bg-gray-400 m-2 p-2">
                        <img src="https://images.unsplash.com/photo-1621574533668-4d6b8f4e6f6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwcHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <p className="text-center">Product Name</p>
                        <p className="text-center">Price</p>
                        <p className="text-center">Quantity</p>
                    </div>
                    <div className="w-1/4 bg-gray-400 m-2 p-2">
                        <img src="https://images.unsplash.com/photo-1621574533668-4d6b8f4e6f6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwcHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <p className="text-center">Product Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList