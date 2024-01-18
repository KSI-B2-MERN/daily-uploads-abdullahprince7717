import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import HomeLayout from '../pages/HomeLayout'
import CustomerLayout from '../pages/CustomerLayout'
import Home from '../components/customer/Home'
import AddProduct from '../components/addProduct'
import EditProduct from '../components/addProduct'
import ProductsList from '../components/customer/productsList'
import Cart from '../components/customer/cart'

function AppRoutes() {
    const [signUp, setSignUp] = useState(false)

    const updateSignUp = () => {
        setSignUp(!signUp)
    }
    return (
        <>
            <Routes>
                <Route path="" element={<HomeLayout />} />
                <Route path="login" element={<Login updateSignUp={updateSignUp} />} />
                <Route path="signup" element={<Signup updateSignUp={updateSignUp} />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path='editproduct' element={<EditProduct />} />

                <Route path="user" element={<CustomerLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="cart" element={<Cart />} />
                </Route>

            </Routes>
        </>
    )
}

export default AppRoutes