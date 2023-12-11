import React from 'react'
import Button from '../Button/Button'

const Cart = ({ cartImg, cartP }) => {
    return (
        <div className='flex flex-col justify-center items-center max-lg:pt-[30px]'>
            <div className='w-[207px] h-[239px] max-sm:w-[300px]'>
                <img className='w-[100%] h-[100%] object-cover rounded-[50px]' src={cartImg} alt="" />
            </div>
            <div>
                <p className='text-[18px] font-bold pt-[20px] text-center'>{cartP}</p>
            </div>
            <div>
                <Button innerText="Read More" />
            </div>
        </div>
    )
}

export default Cart