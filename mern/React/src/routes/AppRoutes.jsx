import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import BusinessLayout from '../pages/BusinessLayout'
import CustomerLayout from '../pages/CustomerLayout'
import Home from '../components/customer/Home'
import AddProduct from '../components/addProduct'
import EditProduct from '../components/addProduct'
import ProductsList from '../components/customer/productsList'
import Cart from '../components/customer/cart'
import Account from '../components/customer/Account'
import ProductInfo from '../components/customer/productInfo'
import Checkout from '../components/customer/Checkout'

function AppRoutes() {
    const [signUp, setSignUp] = useState(false)

    const updateSignUp = () => {
        setSignUp(!signUp)
    }
    return (
        <>
            <Routes>
                <Route path="" element={<BusinessLayout />} />
                <Route path="login" element={<Login updateSignUp={updateSignUp} />} />
                <Route path="signup" element={<Signup updateSignUp={updateSignUp} />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path='editproduct' element={<EditProduct />} />
                <Route path="*" element={<div>Error</div>}></Route>

                <Route path="user" element={<CustomerLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="account" element={<Account />} />
                    <Route path='productInfo' element = {<ProductInfo/>}/>
                    <Route path='checkout' element = {<Checkout/>} />
                    <Route path="*" element={<div>Error</div>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes