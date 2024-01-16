function Carousel() {

    return (
        <div className="pl-10 ">
            <div className="w-full flex mb-7">
                <div className=" relative">
                    <img className="rounded-3xl w-[97%] h-[95%]" src="https://picsum.photos/1300/500" alt="Nothing" />

                    <div className="flex flex-col w-full m-10 absolute top-[20%] ">
                        <p className="w-[50%] flex flex-wrap text-4xl font-bold mb-4">Watch Wearable Devices!</p>
                        <p className="w-[60%] flex flex-wrap text-xl mb-4"> Lorem ipsum dolor, sit consectetur amet  adipisicing elit. Quasi impedit</p>
                        <button className="w-[25%] h-14 bg-white text-xl text-black mb-3">Shop Now</button>
                    </div>
                </div>

                <div className="flex flex-col justify-between pr-10">
                    <img className="rounded-3xl h-[47%]" src="https://picsum.photos/400/221" alt="" />
                    <img className="rounded-3xl h-[47%]" src="https://picsum.photos/400/222" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Carousel