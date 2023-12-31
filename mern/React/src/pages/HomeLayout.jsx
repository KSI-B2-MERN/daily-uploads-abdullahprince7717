import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import AddProduct from "../components/addProduct"
import ProductList from "../components/productList"
function HomeLayout() {
    return (

        <div className="w-screen h-screen bg-slate-400 flex items-end">
            <div className="h-[10%]">
                <Navbar />
            </div>
            <div className="w-full h-[90%] flex overflow-hidden ">
                <div className="w-1/5 h-full bg-gray-700 flex ">
                    <Sidebar />
                </div>
                <div className="w-4/5  bg-slate-500 ">
                    <AddProduct />
                    <ProductList />
                </div>
            </div>

        </div>
    )
}

export default HomeLayout