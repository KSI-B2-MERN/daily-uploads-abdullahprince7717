import { useState } from 'react';

function AddProduct() {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState([])
    const [productCategory, setProductCategory] = useState('')

    return (
        <div className="w-full h-full p-10 bg-slate-200">
            <div className="border-2 shadow-2xl bg-slate-500 flex flex-col justify-evenly items-center">
                <h2> Add a Product</h2>
                <input className='m-2' type="text" placeholder="Product Name" value={productName} onChange={(e) => { setProductName(e.target.value) }} />
                <input type="number" placeholder="Product Name" value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }} />
                <input type="text" placeholder="Product Name" value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }} />
                <input type="file" placeholder="Product Name" value={productImage} onChange={(e) => { setProductImage(e.target.value) }} />
                <input type="text" placeholder="Product Name" value={productCategory} onChange={(e) => { setProductCategory(e.target.value) }} />

            </div>

        </div>
    )
}

export default AddProduct
