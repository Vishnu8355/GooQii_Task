import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchFilter() {
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.length > 0) {
            fetchProducts();
        } else {
            setFilteredProducts([]);
            setDropdownVisible(false);
        }
    }, [query]);

    const fetchProducts = useCallback(async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
            setFilteredProducts(data.products);
            setDropdownVisible(true);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }, [query]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleProductClick = (id) => {
        setDropdownVisible(false);
        navigate(`/productDiscription/${id}`);
    };

    const handleDropdownClose = () => {
        setTimeout(() => setDropdownVisible(false), 200);
    };

    const handleDropdownOpen = () => {
        if (query.length > 0) {
            setDropdownVisible(true);
        }
    };

    return (
        <div className="relative">
            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block lg:w-[500px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for Product, Brands, and More"
                        value={query}
                        onChange={handleChange}
                        onFocus={handleDropdownOpen}
                        onBlur={handleDropdownClose}
                    />
                    {dropdownVisible && filteredProducts.length > 0 && (
                        <div className="absolute inset-x-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            <ul className="max-h-60 overflow-y-auto">
                                {filteredProducts.map((product) => (
                                    <li
                                        key={product.id}
                                        className="p-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleProductClick(product.id)}
                                    >
                                        {product.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default SearchFilter;
