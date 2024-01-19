import { useState } from "react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import AddProduct from "../components/addProduct"
import ProductList from "../components/productList"
import Orders from "../components/orders"
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux/cakeActions"

function HomeLayout() {

    const [currentScreen, setCurentScreen] = useState('Add product');
    const [cakeCount, setCakeCount] = useState(5);

    const onScreenChanged = (screen) => {
        console.log("currentScreen", currentScreen);
        setCurentScreen(screen);
    }
    const state = useSelector((state) => {
        return state.numOfCakes;
    })

    // useDispatch takes the action as a parameter and dispatches it to the reducer
    const dispatch = useDispatch();

    return (
        <div className="w-screen h-screen bg-white text-black flex items-end">
            <div className="h-[10%] ">
                <Navbar />
            </div>
            <div className="w-full h-[90%] flex overflow-hidden ">
                <div className="w-1/5 h-full border-8 flex ">
                    <Sidebar onScreenChanged={onScreenChanged} />
                </div>
                <div className="w-4/5  bg-slate-200 custom-scrollbar">
                    <p>{state}</p>
                    <button onClick={() => { dispatch(buyCake(cakeCount)) }}>Dispatch</button>
                    {currentScreen == 'Add product' ? <AddProduct /> : currentScreen == 'Inventory' ? <ProductList /> : <Orders />}
                </div>
            </div>

        </div>
    )
}

export default HomeLayout