import { } from 'react'

function CartItem() {
    return (
        <div className='w-full h-full'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-28' src="https://picsum.photos/1000/1000" alt="" />
                    <div className='flex flex-col w-40 ml-5'>
                        <p className='text-xl '>Product Name</p>
                        <p className='text-xl '>Price</p>
                        <p className='text-xl'>Review</p>
                    </div>
                </div>
                <div className='flex h-[30%] items-center'>
                    <button className='text-xl'>+</button>
                    <p className='text-xl'>1</p>
                    <button className='text-xl'>-</button>
                </div>
                <p className='text-xl'>Price</p>
            </div>
        </div>
    )
}

export default CartItem