
function sidebar() {
    return (
        <div className="w-full h-5/6 flex flex-col justify-start">
            <p className="p-3"><button className="w-full">Add product</button></p>
            < p className="p-3" > <button className="w-full">Inventory</button></ p>
            <p className="p-3"><button className="w-full">Orders</button></p>
        </div >
    )
}

export default sidebar