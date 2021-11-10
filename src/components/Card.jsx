import React from 'react'
import ImageOne from '../images/food-1.jpg'

const Card = () => {
    return (
        <div>
            <div className="">
                <img src={ImageOne} alt="egg" className="h-20 md:h-40 lg:h-80 rounded" />
            </div>
            <div className="py-4">
                <div className="font-bold text-gray-900 text-lg mb-2">
                    Blog Kesehatan Mental 1
                </div>
                <p className="pb-2 text-gray-900 text-sm">
                    Lorem ipsum dolor sit amet.
                </p>
                <div className="flex">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                <span className="pl-2 text-gray-900 text-sm">
                    12
                </span>
                </div>
            </div>
        </div>
    )
}

export default Card