
function saleCards() {
    return (
        <div className='w-full h-full p-10'>
            <div className="w-full flex mb-7">
                <div className="w-full relative">
                    <img className="rounded-3xl w-[95%] h-[80%] " src="https://picsum.photos/1200/700" alt="Nothing" />

                    <div className="flex flex-col w-full m-10 absolute top-[10%] ">
                        <p className="w-[30%] flex flex-wrap text-2xl font-bold mb-4">Watch Wearable Devices!</p>
                        <p className="w-[40%] flex flex-wrap text-l mb-4"> Lorem ipsum dolor, sit consectetur amet  adipisicing elit. Quasi impedit</p>
                        <a className="text-lg text-black mb-3 underline">Shop Now</a>
                    </div>
                </div>

                <div className="w-full relative">
                    <img className="rounded-3xl w-[95%] h-[80%] " src="https://picsum.photos/1200/700" alt="Nothing" />

                    <div className="flex flex-col w-full m-10 absolute top-[10%] ">
                        <p className="w-[30%] flex flex-wrap text-2xl font-bold mb-4">Watch Wearable Devices!</p>
                        <p className="w-[40%] flex flex-wrap text-l mb-4"> Lorem ipsum dolor, sit consectetur amet  adipisicing elit. Quasi impedit</p>
                        <a className="text-lg text-black mb-3 underline">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default saleCards