/* eslint-disable react/prop-types */
import { useState } from 'react';
import StarRatings from 'react-star-ratings';


function ProductCard(props) {
    const [rating, setRating] = useState(3);

    // const changeRating = (newRating) => {
    //     setRating(newRating);
    // };
    return (
        <div className=" w-52 flex flex-col border-2 rounded-3xl bg-white text-black  ">
            <img className='h-40 rounded-3xl rounded-br-none rounded-bl-none' src={props?.data?.productImage[0]} alt="" />
            <div className='p-5'>
                <p className="text-md font-bold">{props?.data?.productName}</p>
                <p className="text-md">{props?.data?.productPrice}</p>
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