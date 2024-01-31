import { useState, useEffect } from 'react'
import Carousel from './carousel';
import ProductCard from './productCard';
import SaleCards from './saleCards';
import Footer from './footer';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {

        await axios.get('http://localhost:3000/products/getProducts', { withCredentials: true })
            .then((res) => {
                console.log(res)
                setProducts(res.data.response);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProducts();
        console.log("products", products)
    }, [])
    return (
        <div className='h-screen w-screen '>
            <Carousel />
            <div>
                <div className='px-10 mt-5'>
                    <p className='text-4xl text-black font-bold my-10'>Featured Products</p>
                    <div className='flex justify-between'>
                        {products?.map((value, index) => {
                            return <div key={index}>
                                <ProductCard data={value} />
                            </div>
                        })}
                    </div>
                </div>
                <div className='w-full [h-20%]'>
                    <SaleCards />
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    )
}

export default Home