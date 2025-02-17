import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ProductDescription() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const userProductDetail = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(data);
    };

    useEffect(() => {
        userProductDetail();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>

            <div className="container px-5 py-24 mx-auto" style={{ cursor: "auto" }}>
                <Link to="/">
                <button className=" text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded">
                    Back
                </button>
                </Link>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border border-black"
                        src={product.images[0]}
                        style={{ cursor: "auto" }}
                    />
                    <div
                        className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                        style={{ cursor: "auto" }}
                    >
                        <span
                            className="text-xl leading-tight bg-black title-font text-white tracking-widest"
                            style={{ cursor: "auto" }}
                        >
                            On Sale
                        </span>
                        <div className='flex space-x-2'>
                             <p className='text-xl text-black'>Category-</p>
                        <h2
                            className="text-xl capitalize title-font text-blue-500 tracking-widest"
                            style={{ cursor: "auto" }}
                        >
                            {product.category}
                        </h2>
                        </div>
                       
                        <h1
                            className="text-gray-900 text-3xl title-font font-medium mb-1"
                            style={{ cursor: "auto" }}
                        >
                            {product.title}
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="flex  pl-3 py-2  border-gray-200 space-x-2s">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-4 h-4 ${index < Math.round(product.rating)
                                                ? 'text-yellow-300'
                                                : 'text-gray-200 dark:text-gray-600'
                                                }`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}

                                </span>
                                <span className="text-gray-600 ml-3">20 Reviews</span>
                            </span>

                        </div>
                        <p >
                            {product.description}
                        </p>
                        {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex mt-16 border-t ">
                            <span className="title-font mt-2 font-medium text-2xl text-gray-900">
                              Price-  ${product.price}
                            </span>
                            <button className="flex ml-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Buy Now
                            </button>
                            <button className="rounded-full mt-2 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDescription








