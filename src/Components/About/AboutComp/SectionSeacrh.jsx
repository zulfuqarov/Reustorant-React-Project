import React from 'react'
import Button from '../../Button/Button'
const SectionSeacrh = () => {
    return (
        <section className='bg-[#99e54d] rounded-[50px] w-full py-[50px] px-[30px] mt-[50px]'>
            <div className='container mx-auto bg-white rounded-[50px]  '>
                <div className='px-[30px] py-[40px] rounded-3xl text-center  flex flex-col justify-center items-center'>
                    <h1 className='text-[48px]  font-bold text-[#111111] pb-[30px] max-sm:text-[24px]'>Keep up to date with us</h1>
                    <span className='text-[18px] pb-[30px] tracking-wide'>Sample text. Click to select the Text Element.</span>
                    <input type="text" className='w-[420px] max-sm:w-[100%] py-[7px] px-[11px] text-[18px] h-[50px] rounded-3xl border-[2px] border-black' />
                    <Button innerText="Submit" />
                </div>
            </div>
        </section>
    )
}

export default SectionSeacrh