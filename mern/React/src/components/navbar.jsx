function Navbar() {
    return (
        <div className='w-full h-[10%] flex absolute top-0 justify-between '>
            <div className="flex w-3/4  justify-center items-center">
                <p className="mr-3 text-3xl absolute left-3 ">My Store</p>
                <input type="text" className="bg-black text-white ml-4 p-4 h-2/3 w-1/3 border-s-white" placeholder="Search" />
            </div>
            <ul className="flex justify-evenly items-center w-1/3 ">
                <button onClick={() => { }} className="cursor-pointer hover:border-black  bg-transparent">Notification</button>
                <button className="cursor-pointer bg-transparent hover:border-black" >Messages</button>
                <button className="cursor-pointer bg-transparent hover:border-black">Profile</button>
            </ul>
        </div>
    )
}

export default Navbar