import React from 'react'
import Cart from '../../Cart/Cart'
import { Link } from 'react-router-dom'

const SectionCart = () => {
    return (
        <div className='container mx-auto pt-[70px] max-lg:30px'>
            <h1 className='text-[48px] font-bold text-[#111111] pb-[40px] text-center '>View Our Menu</h1>
            <section className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                <Cart cartP="HOT PIZZA" cartImg="https://res.cloudinary.com/dviivhiqd/image/upload/v1702279365/delicious-pizza-isolated-white_hxut3v.jpg" />
                <Cart cartP="SALADS" cartImg="https://res.cloudinary.com/dviivhiqd/image/upload/v1702279382/high-angle-shot-vegetable-salad-white-bowl_hxgth3.jpg" />
                <Cart cartP="DESSERT" cartImg="https://res.cloudinary.com/dviivhiqd/image/upload/v1702279269/pexels-photo-3681641_oz2un1.jpg" />
                <Cart cartP="DRINKS" cartImg="https://res.cloudinary.com/dviivhiqd/image/upload/v1702279276/download_zaxjhj.jpg" />
            </section>
            <p className='text-[18px] text-black text-center py-[40px]'>Sample text. Click to select the Text Element. Image from <Link className="text-[20px] font-bold text-[#f1ae0e]">Freepik</Link></p>
        </div>
    )
}

export default SectionCart