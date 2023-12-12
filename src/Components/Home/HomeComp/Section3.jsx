import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <section className='section3-bg-fon mt-[70px] rounded-3xl flex flex-col justify-end h-[100%]'>
            <div className='container mx-auto'>
                <div className='h-[450px] pl-[30px] max-sm:pl-[10px]'>
                    <div className='pb-[30px]'>
                        <p className='text-white font-bold text-[18px]'>OUR RESTAURANT</p>
                    </div>
                    <div className='pb-[30px]'>
                        <h1 className='w-[463px] leading-[55px] font-bold text-[60px] text-white max-sm:text-[50px] max-sm:w-[300px]'>A culinary adventure for all the senses</h1>
                    </div>
                    <div className='w-[400px] max-sm:w-[300px]'>
                        <p className='w-[100%] text-white text-[18px] tracking-wide'>Sample text. Click to select the Text Element. Image from <Link className='text-[#f1ae0e]'>Freepik</Link></p>
                    </div>
                    <div><Button innerText="Read More" /></div>
                </div>
            </div>
        </section>
  )
}

export default Section3