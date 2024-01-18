import Carousel from './carousel';
import ProductCard from './productCard';
import SaleCards from './saleCards';
import Footer from './footer';

function Home() {
    const prods = [1, 2, 3, 4, 5]
    return (
        <div className='h-screen w-screen '>
            <Carousel />
            <div>
                <div className='px-10 mt-5'>
                    <p className='text-4xl text-black font-bold my-10'>Featured Products</p>
                    <div className='flex justify-between'>
                        {prods.map((value, index) => { return <ProductCard key={index} /> })}
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