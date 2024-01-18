import { useState } from "react";
import Header from "./header"
import Footer from "./footer"
import ProductCard from "./productCard"

function ProductsList() {

    const prods = [1, 2, 3, 4, 5, 34, 34, 34];
    const [prodLayout, setProdLayout] = useState(4);

    const changeProdLayout = () => {
        prodLayout === 4 ? setProdLayout(3) : setProdLayout(4);
    }

    return (
        <div className="w-screen h-screen ">
            {/* <Header /> */}
            <div className="w-full flex flex-col bg-gray-100 pb-10">
                <div className="flex flex-col bg-white m-20 mb-10 p-8 rounded-3xl justify-between text-black">
                    <b className="text-2xl mb-5">PRODUCTS</b>
                    <p>BreadCrumbs</p>
                </div>
                <div className="flex bg-white mx-20 p-5 rounded-3xl justify-between items-center text-black">
                    <div className="flex justify-between w-32">
                        <button onClick={prodLayout == 4 ? changeProdLayout : null} className="hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none">|||</button>
                        <button onClick={prodLayout == 3 ? changeProdLayout : null} className="hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none">||||</button>
                    </div>
                    <div className="flex items-center">
                        <button className="text-md mr-2 ">Sort by</button>
                        <p>Quantity</p>
                    </div>
                </div>
                <div className="flex mx-20 mt-10 rounded-3xl text-black ">
                    <div className="w-[20%] bg-white flex flex-col p-3">
                        <div className="flex justify-between">
                            <p>Filter:</p>
                            <u className="hover:cursor-pointer" onClick={() => { }}>Clear All</u>
                        </div>
                        <hr />
                        <p className="my-2">Availablility: </p>
                        <div className="flex">
                            <input type="checkbox" name="" className="mr-2" />
                            <p>InStock</p>
                        </div>
                        <div className="flex my-2">
                            <input type="checkbox" name="" className="mr-2" />
                            <p>Out of Stock</p>
                        </div>
                        <hr />
                        <p className="my-2">Price: </p>
                        <div className="flex my-2">
                            <input type="checkbox" name="" className="mr-2" />
                            <p>Rs 0 - Rs 100</p>
                        </div>
                        <div className="flex my-2">
                            <input type="checkbox" name="" className="mr-2" />
                            <p>Rs 0 - Rs 100</p>
                        </div>
                        <div className="flex my-2">
                            <input type="checkbox" name="" className="mr-2" />
                            <p>Rs 0 - Rs 100</p>
                        </div>
                    </div>
                    <div className="w-[85%] flex flex-wrap ml-10">
                        {prodLayout == 4 ?
                            prods.map((value, index) => { return <div className=" md:mx-10 lg:mx-6 xl:mx-2 mb-5" key={index}><ProductCard /></div> })
                            :
                            prods.map((value, index) => { return <div className=" md:mx-10 lg:mx-6 xl:mx-10 mb-5" key={index}><ProductCard /></div> })
                        }
                    </div>
                </div>
            </div>
            <hr />
            <Footer />

        </div>
    )
}

export default ProductsList