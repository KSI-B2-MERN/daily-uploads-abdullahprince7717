
function sidebar(props) {
    return (
        <div className="w-full h-5/6 flex flex-col justify-start">
            <button onClick={() => { props.onScreenChanged('Add product') }} className="w-auto p-3 m-2">Add product</button>
            <button onClick={() => { props.onScreenChanged('Inventory') }} className="w-auto p-3 m-2">Inventory</button>
            <button onClick={() => { props.onScreenChanged('Orders') }} className="w-auto p-3 m-2">Orders</button>
        </div >
    )
}

export default sidebar