import { useState } from 'react'
import StarRatings from 'react-star-ratings';

function Review(props) {
    const [reviewTitleLength, setReviewTitleLength] = useState(100);

    const handleReviewTitleLength = () => {
        setReviewTitleLength((preLen) => preLen > 0 ? preLen - 1 : "0");
    }

    return (
        <div className={" w-full mt-8 pt-8 pl-4 pr-4 flex flex-col items-center justify-center bg-white border border-yellow-300"}>

            <p className="text-2xl text-gray-500 font-medium"> Write a Review </p>
            <p className=" mt-6 text-gray-500 font-medium"> Rating </p>
            <div className="mt-5">
                <StarRatings
                    rating={5}
                    starRatedColor="yellow"
                    starDimension="20px"
                    starSpacing="1px"
                    // changeRating={changeRating}
                    numberOfStars={5}
                    name='rating'
                />
            </div>

            <p className=" mt-6 text-gray-500 font-medium"> Review Title ({reviewTitleLength}) </p>
            <input
                className="w-2/5 mt-4 p-3 border border-yellow-300 outline-none text-black"
                type="text"
                placeholder="Give your review a title"
                onChange={handleReviewTitleLength}
            />

            <p className="mt-12 text-gray-500 font-medium"> Review </p>
            <textarea className="w-2/5 mt-4 border border-yellow-300 outline-none p-4"> </textarea>

            <p className="mt-12 text-gray-500 font-medium"> Picture (Optional) </p>
            <div className="w-1/5 mt-4">
                <input
                    className="w-full p-3 border border-yellow-300 outline-none"
                    type="file"
                />
            </div>

            <p className="mt-8 text-gray-500 font-medium"> Name </p>
            <input
                className="w-2/5 mt-3 p-3 border border-yellow-300 outline-none text-black"
                type="text"
                placeholder="Enter Your Name:"
            />

            <p className="mt-8 text-gray-500 font-medium"> Email </p>
            <input
                className="w-2/5 mt-3 p-3 border border-yellow-300 outline-none text-black"
                type="text"
                placeholder="Enter Your Name:"
            />

            <div className="flex justify-center mt-8 gap-4">

                <button className="bg-white mb-8 font-semibold text-yellow-300 border border-black 
                      rounded-none hover:text-white hover:bg-black hover:border-4 hover:border-yellow-300"
                    onClick={() => { props.handleVisibility() }}>
                    Cancel Review
                </button>

                <button className="bg-yellow-300 mb-8 font-semibold text-white border border-black 
                      rounded-none hover:border-2">
                    Submit Review
                </button>

            </div>

        </div>
    )
}

export default Review