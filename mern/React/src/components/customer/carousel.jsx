import img1 from '../../../src/assets/1.png'
import img2 from '../../../src/assets/2.png'
import img3 from '../../../src/assets/3.png'
import img4 from '../../../src/assets/6.png'
import img5 from '../../../src/assets/7.png'
import img6 from '../../../src/assets/8.png'


function Carousel() {

    return (
        <div className="flex flex-col pl-10 ">
            <div className="w-full flex mb-7">
                <div className=" relative w-full text-white hover:scale-105 hover:cursor-pointer">
                    <img className="rounded-3xl w-[97%] h-[100%]" src={img1} alt="Nothing" />

                    <div className="flex flex-col m-10 absolute top-[20%] ">
                        <p className="w-[50%] flex flex-wrap text-4xl font-bold mb-4">Watch Wearable Devices!</p>
                        <p className="w-[60%] flex flex-wrap text-xl mb-4"> Lorem ipsum dolor, sit consectetur amet  adipisicing elit. Quasi impedit</p>
                        <button className="w-[25%] h-14 bg-white text-xl text-black mb-3">Shop Now</button>
                    </div>
                </div>

                <div className="flex flex-col justify-between text-white pr-10 relative">
                    <div className='hover:scale-105 hover:cursor-pointer '>
                        <img className="rounded-3xl " src={img2} alt="" />
                        <div className="flex flex-col m-10 absolute top-[2%] ">
                            <p className="flex flex-wrap text-xl font-bold mb-4">Special Discount</p>
                            <p className='text-white text-lg'>Upto 50% OFF</p>
                            <a className="text-lg text-white mb-3 underline">Shop Now</a>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-3xl hover:scale-105 hover:cursor-pointer " src={img3} alt="" />
                        <div className="flex flex-col m-10 absolute top-[55%]  ">
                            <p className="flex flex-wrap text-xl font-bold mb-4">Hot Sale</p>
                            <p className='text-white text-lg'>Upto 30% OFF</p>
                            <a className="text-lg text-white mb-3 underline hover:cursor-pointer">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pr-10 ">
                <img className="rounded-3xl w-[31%] h-[47%] hover:scale-105 hover:cursor-pointer " src={img4} alt="" />
                {/* <div className="flex flex-col m-10 absolute  ">
                    <p className="flex flex-wrap text-xl text-white font-bold mb-4">Hero Camera</p>
                    <a className="text-lg text-white mb-3 underline">Shop Now</a>
                </div> */}
                <img className="rounded-3xl w-[31%] h-[47%] hover:scale-105 hover:cursor-pointer" src={img5} alt="" />

                <img className="rounded-3xl w-[31%] h-[47%] hover:scale-105 hover:cursor-pointer" src={img6} alt="" />

            </div>
        </div>
    )
}

export default Carousel