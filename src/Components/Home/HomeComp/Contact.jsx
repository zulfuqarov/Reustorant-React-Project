import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (

    <section className='bg-[#99e54d] w-full py-[50px] px-[30px] rounded-[50px]'>
      <div className='container mx-auto bg-white  rounded-[50px]'>
        <div className='px-[30px] py-[40px] rounded-3xl text-center  flex flex-col justify-center items-center'>
          <h1 className='text-[48px]  font-bold text-[#111111] pb-[30px] max-sm:text-[24px]'>Keep up to date with us</h1>
          <span className='text-[18px] pb-[30px] tracking-wide'>Sample text. Click to select the Text Element.</span>
          <Link className='text-[36px] hover:text-[#99e54d] transition-all tracking-wide max-sm:text-[24px]'><i className="fa-solid fa-phone text-[#f1ae0e]"></i> +994-70-811-XX-XX</Link>
        </div>
      </div>
    </section>
  )
}

export default Contact