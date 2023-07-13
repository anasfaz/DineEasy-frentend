import React from 'react'
import { MdPersonOutline, MdFoodBank } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { BsCartCheckFill } from 'react-icons/bs'
import { IoFastFood } from 'react-icons/io5'


import { useNavigate } from 'react-router-dom'
export const MobileNavigatio = () => {
  const Navigate = useNavigate()
  //account btn
  const accountHandleclick = () => {
    console.log('click---------------')
    Navigate('/login')
  }
  
  return (
    <>
      <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-white-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-white group"
          >
            <MdFoodBank className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500" />
            <span>Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-bookmark"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-orengeq-50 dark:hover:bg-white group"
          >
            <IoFastFood className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500" />
            <span>orders</span>
          </button>
          <div
            id="tooltip-bookmark"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Bookmark
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-white group"
          >
            <BsCartCheckFill className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500" />
            <span className="sr-only">New post</span>
            <span>Cart</span>
          </button>
          <div
            id="tooltip-post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            New post
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button 
            data-tooltip-target="tooltip-search"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-white group"
          >
            <BiSearch className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500" />
            <span className="sr-only">Search</span>
            <span>Search</span>
          </button>
          <div
            id="tooltip-search"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-white"
          >
            Search
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            onClick={accountHandleclick}
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-white group"
          >
            <MdPersonOutline className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orenge-600 dark:group-hover:text-orange-500" />

            <span>account</span>
          </button>
        </div>
      </div>
    </>
  )
}
