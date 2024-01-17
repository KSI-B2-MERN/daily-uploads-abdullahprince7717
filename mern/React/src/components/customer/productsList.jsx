import Header from "./header"
import Footer from "./footer"
function productsList() {
    return (
        <div className="w-screen h-screen ">
            <Header />
            <div className="w-full flex flex-col bg-gray-100 pb-10">
                <div className="flex flex-col bg-white m-20 mb-10 p-8 rounded-3xl justify-between text-black">
                    <b className="text-2xl mb-5">PRODUCTS</b>
                    <p>BreadCrumbs</p>
                </div>
                <div className="flex bg-white mx-20 p-5 rounded-3xl justify-end items-center text-black">
                    <button className="text-md mr-2 ">Sort by</button>
                    <p>Quantity</p>
                </div>
                <div className=" w-[25%] flex bg-white mx-20 mt-10 rounded-3xl text-black ">
                    <div className="flex flex-col p-3">
                        <p>Filetr:</p>
                        <hr />
                        <p>Availablility: </p>
                        <hr />
                        <input type="checkbox" name="" className="" />


                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default productsList