import img1 from '../../../src/assets/4.png'
import img2 from '../../../src/assets/5.png'


function saleCards() {
    return (
        <div className='w-full h-full p-10'>
            <div className="w-full flex mb-7">
                <div className="w-full relative hover:scale-105 hover:cursor-pointer">
                    <img className="rounded-3xl w-[95%]" src={img1} alt="Nothing" />

                    <div className="flex flex-col w-full m-10 absolute top-[10%] ">
                        <p className='text-slate-200 text-xl'>Hurry Up! SALE</p>
                        <p className="w-[50%] flex flex-wrap text-white text-2xl font-bold my-4">Unbeatable Discounts</p>
                        <a className="text-lg text-white mb-3 underline">Shop Now</a>
                    </div>
                </div>

                <div className="w-full relative hover:scale-105 hover:cursor-pointer ">
                    <img className="rounded-3xl w-[95%] " src={img2} alt="Nothing" />

                    <div className="flex flex-col w-full m-10 absolute top-[10%] ">
                        <p className='text-slate-200 text-xl'>Hurry Up! SALE</p>
                        <p className="w-[50%] flex flex-wrap text-white text-2xl font-bold my-4">Massive Sale</p>
                        <a className="text-lg text-white mb-3 underline">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default saleCards