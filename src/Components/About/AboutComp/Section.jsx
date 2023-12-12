import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'

const Section = () => {
    return (
        <section className='bg-[#f1ae0e] rounded-[50px] w-full py-[50px] px-[30px] mt-[50px]'>
            <div className='container mx-auto bg-white rounded-[50px]  '>
                <div className='px-[30px] py-[40px] rounded-3xl text-center  flex flex-col justify-center items-center'>
                    <h1 className='text-[48px]  font-bold text-[#111111] pb-[30px] max-sm:text-[24px] w-[768px] max-md:w-[468px] max-sm:w-[100%] leading-[60px] max-md:leading-[35px]'>We make a small, intimate, and inviting space for an unforgettable meal</h1>
                    <span className='text-[18px] pb-[30px] tracking-wide w-[700px] max-md:w-[400px] max-sm:w-[100%] '>Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</span>
                    <Button innerText="Submit" />
                </div>
            </div>
        </section>
    )
}

export default Section