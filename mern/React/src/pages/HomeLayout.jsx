import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import AddProduct from "../components/addProduct"
function HomeLayout() {
    return (
        <div className="flex flex-col w-full h-full">
            <Navbar />
            <div className="flex flex-row h-full absolute top-16 w-full">
                <div className="bg-gray-700 h-full w-1/5">
                    <Sidebar />
                </div>
                <div className="bg-blue-400 h-full w-4/5">
                    <AddProduct />
                </div>
            </div>
        </div>
    )
}

export default HomeLayout