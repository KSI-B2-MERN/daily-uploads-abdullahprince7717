import { useState } from "react";
import Profile from "./Profile";
import Orders from "./Orders";
import Addresses from "./Addresses";
import Footer from "./footer"

function Account() {

    const [currentComponent, setCurrentComponent] = useState("profile")

    const changeCurrentComponent = (component) => {
        setCurrentComponent(component)
    }

    return (
        <div className="w-screen h-screen flex flex-col">
            <b className="text-3xl px-20 py-10 text-center" >Account</b>
            <div className="bg-gray-200 flex flex-col py-10 mb-10">
                <b className="text-3xl px-20 text-center" >Halo User, Welcome to Account </b>
                <div className="w-[100%] px-20 py-20 flex justify-between">
                    <div className=" h-[50%] pt-20 flex flex-col justify-between">
                        <button onClick={() => { changeCurrentComponent("profile") }} autoFocus className="hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:font-bold mb-2">Profile</button>
                        <button onClick={() => { changeCurrentComponent("orders") }} className="hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:font-bold mb-2">Orders</button>
                        <button onClick={() => { changeCurrentComponent("addresses") }} className="hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:font-bold mb-2">Addresses</button>
                        <button onClick={() => { changeCurrentComponent("logout") }} className="hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:font-bold mb-2">Logout</button>
                    </div>
                    <div className="w-full">
                        {currentComponent == "profile" ? <Profile /> : currentComponent == "orders" ? <Orders /> : currentComponent == "addresses" ? <Addresses /> : null}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account