import React from 'react'
import { Link } from 'react-router-dom';

const SmallButton = (props) => {
    return (
        <div>
            <a href={props.url}>
                <Link to="/" className="py-3 px-6 bg-purple-600 hover:bg-pink-600 rounded-md text-white text-sm font-bold">
                    {props.title}
                </Link>
            </a>
        </div>
    )
}

export default SmallButton