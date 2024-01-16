import PropTypes from 'prop-types';
import Header from '../components/customer/header';
import Carousel from '../components/customer/carousel';
import Services from '../components/customer/services';
import ProductCard from '../components/customer/productCard';
function CustomerLayout(props) {
    return (
        <div className='h-screen w-screen'>
            {props.children}
            <div className='h-35 w-full mb-5'>
                <Header />
            </div>
            <Carousel />
            <Services />
            <div className=''>
                <ProductCard />
            </div>
        </div>
    )
}

CustomerLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default CustomerLayout