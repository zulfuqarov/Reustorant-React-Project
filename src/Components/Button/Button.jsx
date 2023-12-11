import React from 'react'

const Button = ({ innerText }) => {
    return (
        <button className='bg-[#f1ae0e] text-[18px] font-bold mt-[20px] w-[180px] h-[55px] rounded-3xl text-white hover:text-black hover:bg-white transition-all'>
            {innerText}
        </button>
    )
}

export default Button