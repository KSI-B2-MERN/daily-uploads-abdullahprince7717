import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/SignUp'
import HomeLayout from '../pages/HomeLayout'
// import AdminLayout from '../pages/AdminLayout'
import CustomerLayout from '../pages/CustomerLayout'
import AddProduct from '../components/addProduct'
import EditProduct from '../components/addProduct'
function AppRoutes() {
    const [signUp, setSignUp] = useState(false)

    const updateSignUp = () => {
        setSignUp(!signUp)
    }
    return (
        <>
            <Routes>
                <Route path="" element={<HomeLayout />} /> {/* OR <Route index element={<HomeLayout />} /> */}
                <Route path="login" element={<Login updateSignUp={updateSignUp} />} />
                <Route path="signup" element={<Signup updateSignUp={updateSignUp} />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path='editproduct' element={<EditProduct />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}

                {/* Now we can make it if we have layouts 
                    1st Technique 
                */}
                <Route path="vendor" element={<HomeLayout />}>
                    {/* The paths below are childs of adminlayout (admin route) and to make it useful we will use Outlet in 
                        adminLayout(parent) to use the childs or let user to route to childs
                    / */}


                    {/* <Route path="addproduct" element={<AddProduct />} /> */}
                    {/* <Route path="addcategory" element={<AddCategory />} /> */}


                </Route>

                {/* 
                    2nd Technique 
                */}

                <Route path="customer"
                    element={<CustomerLayout>
                        {/* The paths below are childs of customerlayout (customer route) and to make it useful we will use props.children in 
                        customerLayout(parent) to use the childs or let user to route to childs
                    */}
                        {/* 
                            <Route path="getproducts" element={<getProducts />} />
                            
                        */}
                    </CustomerLayout>}

                />


            </Routes>
        </>
    )
}

export default AppRoutes