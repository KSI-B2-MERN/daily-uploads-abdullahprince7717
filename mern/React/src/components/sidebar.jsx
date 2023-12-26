
function sidebar() {
    return (
        <div className="w-full h-full">
            <ul className="flex flex-col h-full">
                <li className="p-3"><button className="w-full">Add product</button></li>
                <li className="p-3"><button className="w-full">Inventory</button></li>
                <li className="p-3"><button className="w-full">Orders</button></li>
            </ul>
        </div>
    )
}

export default sidebar