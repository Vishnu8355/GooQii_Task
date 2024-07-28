import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchFilter from '../Products/SearchFilter';

function Navbar() {
    const [menu, setMenu] = useState(false)
    const [menuUser, setMenuUser] = useState(false)

    const MenuClick = () => {
        setMenu(!menu);
    };
    const MenuClick1 = () => {
        setMenuUser(!menuUser);
    };

    return (
        <>


            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                onClick={MenuClick}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <div className="sm:mb-6 md:mb-0">
                                    <Link to="/" className="flex items-center">
                                        <img
                                            src="https://flowbite.com/docs/images/logo.svg"
                                            className="h-8 me-3"
                                            alt="FlowBite Logo"
                                        />
                                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                            Tailwind
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <Link to="/"

                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Products
                                    </a>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Category
                                    </a>

                                </div>





                            </div>
                            <div className='hidden sm:block ml-2'>
                                <SearchFilter />
                            </div>


                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <>
                                {/* component */}
                                <div className=" bg-transparent mr-2 text-white flex justify-center items-center">
                                    <div className="relative py-1">
                                        <div className="t-0 absolute left-3">
                                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                                0
                                            </p>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="file: mt-4 h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </>

                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        type="button"
                                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        onClick={MenuClick1}
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </button>
                                </div>

                                <div
                                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${menuUser ? 'block' : 'hidden'}`}
                                    role="menu"

                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex={-1}
                                >
                                    {/* Active: "bg-gray-100", Not Active: "" */}
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="user-menu-item-0"
                                    >
                                        Your Profile
                                    </a>

                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="user-menu-item-2"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu, show/hide based on menu state. */}
                <div className={`w-full md:hidden md:w-auto ${menu ? 'block' : 'hidden'}`} >
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <Link to="/"
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Home
                        </Link>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Products
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Category
                        </a>
                        <div>
                            <SearchFilter />
                        </div>

                    </div>
                </div>
            </nav>


        </>

    )
}

export default Navbar