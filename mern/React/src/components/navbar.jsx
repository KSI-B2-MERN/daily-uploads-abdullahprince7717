function navbar() {
    return (
        <div className='w-screen h-16 bg-black flex absolute top-0 justify-between '>
            <div className="flex w-3/4  justify-center items-center">
                <p className="mr-3 text-3xl absolute left-3">My Store</p>
                <input type="text" className="ml-4 h-2/3 w-1/3" />
            </div>
            <ul className="flex justify-evenly items-center w-1/3">
                <li>Notification</li>
                <li>Messages</li>
                <li>Profile</li>
            </ul>
        </div>
    )
}

export default navbar