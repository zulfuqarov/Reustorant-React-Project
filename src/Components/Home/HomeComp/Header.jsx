import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
const Header = () => {
    return (
        <header className='header-bg-fon'>
            <div className='container mx-auto'>
                <div className='pl-[30px] pt-[30px] pb-[30px] max-md:pl-[20px] max-md:pt-[20px] max-md:pb-[20px] '>
                    <div className='w-[225px] h-[225px] bg-[#99e54d] rounded-[50%] flex flex-col justify-center items-center'>
                        <h1 className='text-[60px] font-bold text-black'>40%</h1>
                        <p className='text-[20px] font-bold text-black text-center'>BUSINESS <br /> LUNCH</p>
                    </div>
                    <div className='pt-[20px]'>
                        <p className=' text-[18px] text-white font-bold tracking-[1px]'>
                            SAMPLE HEADLINE
                        </p>
                    </div>
                    <div className='pt-[20px] '>
                        <h1 className='w-[463px] leading-[55px] font-bold text-[60px] text-white max-sm:text-[50px] max-sm:w-[300px]'>Where every ingredient tells a story</h1>
                        <span className='pt-[20px] inline-block text-[18px] text-white'>Image from <Link className='text-[#99e54d]'>Freepik</Link></span>
                    </div>
                    <div className='h-[0]'>
                        <Button innerText="Read More" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header