import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function footer() {
    return (
        <div className="w-full h-60 flex justify-around bg-white text-black ">
            <div className="w-48 flex flex-col justify-around">
                <b>About Us</b>
                <p>The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
                <div className='w-36 flex justify-between'>
                    <FaInstagram size={28} />
                    <FaFacebook size={28} />
                    <FaTwitter size={28} />
                </div>
            </div>
            <div className="w-48 flex flex-col my-3">
                <b>Quick Links</b>
                <div className='flex flex-col justify-around mt-5 space-y-2'>
                    <a href="" className="">Home</a>
                    <a href="" className="">Contact</a>
                    <a href="" className="">FAQS</a>
                    <a href="" className="">Privacy Policy</a>
                    <a href="" className="">Return Policy</a>
                </div>
            </div>
            <div className="w-48 flex flex-col my-3">
                <b>Company</b>
                <div className='flex flex-col justify-around mt-5 space-y-2'>
                    <a href="" className="">WishList</a>
                    <a href="" className="">My Account</a>
                    <a href="" className="">Cart</a>
                    <a href="" className="">Shop</a>
                </div>
            </div>
            <div className="w-80 flex flex-col justify-around">
                <b>Newsletter</b>
                <p>The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
                <div className='w-full border-2 flex'>
                    <input type="text" placeholder="Email" className="p-5 w-5/6 h-2 bg-white text-black" />
                    <button className="bg-white"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default footer