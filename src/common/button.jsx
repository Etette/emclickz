import React from "react"

export const Button = (props) => {
    return (
    <button className="bg-blue-500 text-neutral-950 px-8 py-3 rounded-full font-bold hover:bg-indigo-950 hover:text-white shadow-xl transition duration-300 mb-1">
        <span className='font-serif text-lg md:text-xl'>{props.label}</span>
    </button>
    )
}