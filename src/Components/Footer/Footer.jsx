import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
const Footer = () => {
    return (
        <footer className='pt-[70px]'>
            <div className='container mx-auto'>
                <div className='flex flex-row space-x-5 px-[60px] max-[1024px]:px-[0] max-md:flex-col max-md:justify-center max-md:items-center '>
                    <div className='basis-3/6 h-[500px]'>
                        <div className='w-[225px] h-[225px] max-[321px]:w-[175px] max-[321px]:h-[175px] bg-[#99e54d] rounded-[50%] flex flex-col justify-center items-center'>
                            <h1 className='text-[60px] max-[321px]:text-[40px] font-bold text-black'>40%</h1>
                            <p className='text-[20px] max-[321px]:text-[18px] font-bold text-black text-center'>BUSINESS <br /> LUNCH</p>
                        </div>
                        <div className='pt-[30px]'>
                            <p className='text-[18px] tracking-wide'>Image from <Link className='text-[20px] text-[#99e54d]'>Freepik</Link></p>
                        </div>
                        <div className='pt-[30px]'>
                            <h1 className='font-bold text-[48px] tracking-wide text-black'>Our Contact</h1>
                        </div>
                        <div className='pt-[10px]'>
                            <Button innerText="Read More" />
                        </div>
                    </div>
                    <div className='basis-3/6 max-md:pt-[60px]'>
                        <div className='flex flex-row h-[160px]'>
                            <div className='rounded-[50px] bg-[#99e54d] w-[67px] h-[67px] flex flex-col justify-center items-center'><i className="fa-regular fa-envelope text-[22px]"></i></div>
                            <div className='pl-[30px]'>
                                <p className='pb-[20px] text-[18px] text-black font-bold'>CHART TO US</p>
                                <p className='pb-[20px] text-[18px] text-black'>Our friendly team is here to help.</p>
                                <Link className='text-[#f1ae0e]'>Hi.Ourcompany@gmail.com</Link>
                            </div>
                        </div>
                        <div className='flex flex-row h-[200px]'>
                            <div className='rounded-[50px] bg-[#99e54d] w-[67px] h-[67px] flex flex-col justify-center items-center'><i className="fa-solid fa-location-dot text-[22px]"></i></div>
                            <div className='pl-[30px]'>
                                <p className='pb-[20px] text-[18px] text-black font-bold'>OFFICE</p>
                                <p className='pb-[20px] text-[18px] text-black'>Come say hello at our office HQ.</p>
                                <Link className='text-[#f1ae0e]'>121 Rock Street,21 Avenue</Link> <br />
                                <Link className='text-[#f1ae0e]'>New York,NY g2103-g000</Link>
                            </div>
                        </div>
                        <div className='flex flex-row h-[160px]'>
                            <div className='rounded-[50px] bg-[#99e54d] w-[67px] h-[67px] flex flex-col justify-center items-center'><i className="fa-solid fa-phone text-[22px]"></i></div>
                            <div className='pl-[30px]'>
                                <p className='pb-[20px] text-[18px] text-black font-bold'>PHONE</p>
                                <p className='pb-[20px] text-[18px] text-black'>Mon-Fri from 8am to 5am</p>
                                <Link className='text-[#f1ae0e]'>+994-70-811-XX-XX</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer