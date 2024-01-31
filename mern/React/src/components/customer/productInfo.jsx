import { useState } from "react"
import { CiHeart } from "react-icons/ci";
// import { CiSaveUp2 } from "react-icons/ci";
import StarRatings from 'react-star-ratings';
import Review from "./Review"

function ProductInfo() {

  // const userReviews = [
  //   1,
  //   2
  // ];

  const [value, setValue] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(3);
  const [visibility, setVisibility] = useState(false);

  const handleQuantityDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleValue = (value) => {
    setValue(value);
  }

  const handleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  }

  // const changeRating = (newRating) => {
  //     setRating(newRating);
  // };

  return (
    <>
      {/* First Div */}
      <div className="w-full h-full">

        {/* Second Div */}
        <div className="w-full p-4 bg-gray-200 flex flex-row justify-center gap-6">

          <div className="mt-2.5 p-4 w-[50%] bg-white">
            <img src="https://picsum.photos/1200/700" />
          </div>

          <div className="p-1 w-[40%]">

            <p className="text-lg font-semibold text-gray-500"> Vendor: <span className="font-normal"> HY  </span> </p>
            <p className="mt-1 text-3xl font-semibold text-black-400"> ABSTRACT MACBOOK </p>

            <p className="mt-1 text-xl text-black-400"> $Price </p>

            <div className="w-full mt-12 flex justify-start gap-x-8">

              <div className="w-[40%] flex justify-between items-center bg-white rounded-full">
                <button
                  className="text-2xl font-semibold rounded-full outline-none border-none focus:outline-none"
                  onClick={() => { quantity > 0 ? handleQuantityDecrement() : "" }}> - </button>

                <p
                  className="text-lg text-black">
                  {quantity}
                </p>

                <button
                  className="text-2xl font-semibold rounded-full focus:outline-none border-none"
                  onClick={handleQuantityIncrement}> + </button>
              </div>

              <div className="mt-1.5 w-1/4 h-12 flex justify-center items-center hover:text-white hover:bg-black border border-black cursor-pointer">
                Add To Cart
              </div>

            </div>

            <button className="bg-[#0C52BA] text-white w-full mt-8 p-3 rounded-sm border-none outline-none">
              Buy it now
            </button>

            <div className="flex justify-start gap-4 mt-8">
              <div> <CiHeart size={25} /> </div>
              <div> Add To Wishlist </div>
            </div>

          </div>

        </div> {/* Second Div End */}

        {/* Third Div */}
        <div className="w-full mt-4 bg-white">

          <div className="flex justify-start p-8 ml-4 text-2xl text-black-500 gap-8 font-semibold">

            <p
              className={`${value == "Description" ? "text-red-500" : "text-black-700"} 
                hover:text-red-500 cursor-pointer`}
              onClick={() => handleValue("Description")}>
              Description
            </p>
            <p
              className={`${value == "Reviews" ? "text-red-500" : "text-black-700"} 
                  hover:text-red-500 cursor-pointer`}
              onClick={() => handleValue("Reviews")}>
              Product Reviews
            </p>
            <p
              className={`${value == "Policy" ? "text-red-500" : "text-black-700"}
                  hover:text-red-500 cursor-pointer`}
              onClick={() => handleValue("Policy")}>
              Privacy Policy
            </p>

          </div>

          {value == "Description" ?

            <div className="text-black p-2 ml-10">
              The MacBook, a renowned product of technological innovation and elegance,
              represents the epitome of modern computing. Its sleek and minimalist design embodies the
              marriage of form and function, captivating users with its premium aesthetics and cutting-edge
              capabilities. Crafted from precision-engineered materials, it seamlessly
              integrates into the digital lifestyle of the 21st century.
            </div>

            : value == "Reviews" ?

              <div className="text-black p-2 ml-10 ">

                <p className="text-center text-2xl font-semibold"> Customer Reviews </p>

                <div className="w-full mt-8 flex justify-around">

                  <div className="w-1/3 flex items-center gap-4">
                    <StarRatings
                      rating={rating}
                      starRatedColor="yellow"
                      starDimension="20px"
                      starSpacing="1px"
                      // changeRating={changeRating}
                      numberOfStars={5}
                      name='rating'
                    />

                    <p className="text-gray-500 font-medium mt-0.5"> 5.0 out of 5 </p>
                  </div>

                  <div className="w-1/3 flex justify-evenly">

                    <div className="flex flex-col">
                      <StarRatings
                        rating={5}
                        starRatedColor="yellow"
                        starDimension="20px"
                        starSpacing="1px"
                        // changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                      />

                      <StarRatings
                        rating={4}
                        starRatedColor="yellow"
                        starDimension="20px"
                        starSpacing="1px"
                        // changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                      />

                      <StarRatings
                        rating={3}
                        starRatedColor="yellow"
                        starDimension="20px"
                        starSpacing="1px"
                        // changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                      />

                      <StarRatings
                        rating={2}
                        starRatedColor="yellow"
                        starDimension="20px"
                        starSpacing="1px"
                        // changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                      />

                      <StarRatings
                        rating={1}
                        starRatedColor="yellow"
                        starDimension="20px"
                        starSpacing="1px"
                        // changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                      />
                    </div>

                    <div className="flex flex-col mt-0.5">
                      <p className="text-gray-500 font-medium"> 2 </p>
                      <p className="text-gray-500 font-medium"> 0 </p>
                      <p className="text-gray-500 font-medium"> 0 </p>
                      <p className="text-gray-500 font-medium"> 0 </p>
                      <p className="text-gray-500 font-medium"> 0 </p>
                    </div>

                  </div>

                  <div className="w-1/3 flex items-center">
                    <button className="w-2/3 bg-yellow-300 border-none focus:outline-none 
                      rounded-none text-white font-semibold"
                      onClick={handleVisibility}>
                      {!visibility ? "Write a Review" : "Cancel Review"}
                    </button>
                  </div>
                </div>
                
                {visibility ? <Review handleVisibility={handleVisibility} /> : null}

                <div className="w-ful flex justify-between bg-gray-50 pl-4 mt-12 pr-4">
                  
                  <div className="flex flex-col">
                    <StarRatings
                      rating={5}
                      starRatedColor="yellow"
                      starDimension="20px"
                      starSpacing="1px"
                      // changeRating={changeRating}
                      numberOfStars={5}
                      name='rating'
                    />

                    <div className="flex justify-start gap-2 mt-4">
                      <img
                        className="rounded-full w-[5%]"
                        src="/public/ReviewUserIcon.png"
                        alt="no image"
                      />

                      <p className="text-black mt-4"> Name Of User </p>
                    </div>

                    <p className="text-black text-lg mt-4 font-semibold"> Name Of Review </p>
                    <p className="text-black text-lg mt-2">
                      The PQR Smart Home Hub is a game-changer in home automation. It effortlessly connects all
                      my smart devices and allows me to control them from a single app. Setting up routines
                      and schedules.
                    </p>
                  </div>
                  <p className="text-gray-500"> 10/29/2023 </p>

                </div>
              </div>


              : <div className="text-black p-2 ml-10">
                Shipping cost is based on weight. Just add products to your cart and use the
                Shipping Calculator to see the shipping price.
                <br />
                <br />
                We want you to be 100% satisfied with
                your purchase. Items can be returned or exchanged within 30 days of delivery.
              </div>

          }


        </div> {/* Third Div End */}
      </div> {/* First Div End */}

    </>

  )
}

export default ProductInfo