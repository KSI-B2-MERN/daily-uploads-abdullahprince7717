import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import AddProduct from "../components/addProduct"
function HomeLayout() {
    return (
        // <div className="flex flex-col w-screen h-screen">
        //     <div className="flex h-full w-full ">
        //         <Navbar />
        //         <div className="bg-gray-700 h-full w-1/5">
        //             <Sidebar />
        //         </div>
        //         <div className=" h-full w-4/5 ">
        //             <AddProduct />
        //         </div>
        //     </div>
        // </div>

        <div className="w-screen h-screen bg-slate-400 flex">
            <Navbar />
            <div className="w-full h-full flex overflow-hidden ">
                <div className="w-1/5 h-full bg-gray-700 flex items-end">
                    <Sidebar />
                </div>
                <div className="w-4/5 max-h-min bg-slate-500 ">
                    <AddProduct />
                </div>
            </div>

        </div>
    )
}

export default HomeLayout