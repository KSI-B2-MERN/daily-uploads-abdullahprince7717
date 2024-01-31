import { useState } from 'react';
import UploadImage from './uploadImage';
import axios from "axios";



function AddProduct() {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState([])
    const [productCategory, setProductCategory] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const imgTemplate = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }];

    const uploadImage = (image) => {
        setProductImage([...productImage, image]);
    }

    const addProduct = async () => {
        const { data, error } = await axios.post(
            "http://localhost:3000/products/createproduct",
            {
                productImage,
                productName,
                productPrice,
                productQuantity,
                productDescription,
                productCategory,
            },
            { withCredentials: true }
        );
        if (error) {
            return alert("unable to create product");
        }

        if (data) {
            alert("Product Added to Inventory");
        }

        setProductImage([]);
        setProductDescription("");
        setProductPrice("");
        setProductQuantity("");
        setProductName("");
        setProductCategory("");
    };

    return (
        <div className="w-full h-full  py-2 bg-slate-200 flex flex-col justify-evenly items-center text-black overflow-hidden">
            <div className='w-[70%] h-full flex flex-col px-10 py-10 overflow-y-auto hide-scroll ' >
                <p className='m-3 text-3xl text-center mt-4'> Add a Product</p>
                <label className='relative left-3 ' > Product Name </label>
                <input className='m-2  p-3 border-slate-300 border-s rounded-xl text-white' type="text" placeholder="Product Name" value={productName} onChange={(e) => { setProductName(e.target.value) }} />

                <label className='relative left-3' > Product Price </label>
                <input className='m-2 p-3 border-slate-300 border-s rounded-xl text-white' type="number" placeholder="Product Price" value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }} />

                <label className='relative left-3' > Product Quantity </label>
                <input className='m-2 p-3 border-slate-300 border-s rounded-xl text-white' type="number" placeholder="Product Quantity" value={productQuantity} onChange={(e) => { setProductQuantity(e.target.value) }} />

                <label className='relative left-3' > Product Description </label>
                <input className='m-2  p-3 border-slate-300 border-s rounded-xl text-white' type="text" placeholder="Product Description" value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }} />

                <label className='relative left-3' > Product Image </label>
                <div className='ml-3 flex items-center justify-between'>
                    {imgTemplate.map((items, index) => {

                        return <UploadImage key={index} uploadImage={uploadImage} />;
                    })}
                </div>
                <label className='relative left-3' > Product Category </label>
                <input className='m-2  p-3 border-slate-300 rounded-xl text-white' type="text" placeholder="Product Category" value={productCategory} onChange={(e) => { setProductCategory(e.target.value) }} />

                <button className='m-2 mb-12  p-2 border-slate-30 rounded-xl ' onClick={() => {
                    void addProduct();
                }}> Add Product</button>
            </div>

        </div>
    )
}

export default AddProduct
