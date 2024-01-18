import { Outlet } from 'react-router-dom';
import Header from '../components/customer/header';
import Footer from '../components/customer/footer';
function CustomerLayout() {
    return (
        <div className='w-screen h-screen'>
            <div className='h-35 w-full mb-5 '> <Header /> </div>
            <Outlet />
            {/* <div className=''>
                <Footer />
            </div> */}
        </div>
    )
}


export default CustomerLayout