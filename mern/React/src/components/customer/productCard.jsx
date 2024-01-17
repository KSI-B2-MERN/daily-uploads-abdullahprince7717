import { useState } from 'react';
import StarRatings from 'react-star-ratings';


function ProductCard() {
    const [rating, setRating] = useState(3);

    // const changeRating = (newRating) => {
    //     setRating(newRating);
    // };
    return (
        <div className=" w-52 flex flex-col border-2 rounded-3xl  text-black  ">
            <img className='h-40 rounded-3xl rounded-br-none rounded-bl-none' src="https://picsum.photos/1000/700" alt="" />
            {/* <button className='bg-blue-500 text-white absolute bottom-16 w-full'>Add to Cart</button> */}
            <div className='p-5'>
                <p className="text-md font-bold">Samsung galaxy s20</p>
                <p className="text-md">280 $</p>
                <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    starDimension="20px"
                    starSpacing="1px"
                    // changeRating={changeRating}
                    numberOfStars={5}
                    name='rating'
                />
            </div>
        </div>
    )
}

export default ProductCard