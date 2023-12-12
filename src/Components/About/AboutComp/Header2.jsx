import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
const Header2 = () => {
    return (
        <div className='bg-white mt-[50px] rounded-[50px] flex flex-row space-x-8 max-md:space-x-0 max-sm:mx-[10px] px-[60px] max-lg:px-[0] max-md:flex-col justify-center items-center'>
            <div className='basis-3/6 max-md:pt-[30px]'>
                <img className='rounded-[50px]' src="https://res.cloudinary.com/dviivhiqd/image/upload/v1702279254/high-angle-shot-vegetable-salad-white-bowl_llwkjb.jpg" alt="" />
            </div>
            <div className='basis-3/6 flex flex-col max-md:justify-center max-md:items-center'>
                <div className='pt-[30px]'>
                    <p className='text-[18px] font-bold tracking-wide'>OUR MISSION</p>
                </div>
                <div className='pt-[30px]'>
                    <h1 className='text-[48px] font-bold text-black tracking-wide'>About Us</h1>
                </div>
                <div className='pt-[30px]'>
                    <p className='text-[18px] tracking-wide	w-[509px] max-sm:w-[100%] max-md:text-center'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
                </div>
                <div className='pt-[30px]'>
                    <span className='text-[18px]'>Image from</span> <Link className='text-[20] text-[#f1ae0e]'>Freepink</Link>
                </div>
                <div>
                    <Button innerText="Read More" />
                </div>
            </div>
        </div>
    )
}

export default Header2