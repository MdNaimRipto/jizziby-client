import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Countdown from '../Shared/CountDown';
import banner from "../../Assets/banner-countdown.png"

const FlashSale = () => {
    return (
        <div className="px-4 py-8 mx-auto container my-16"
            data-aos="fade-right"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundPosition: "center",
                height: "300px"
            }}
        >
            <div className="flex flex-col justify-center items-center pt-7">
                <Countdown />
                <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans md:text-3xl font-semibold tracking-tight text-2xl sm:leading-none">
                        WOO! Flash Sale
                    </h2>
                    <button className='flex items-center border-b border-b-[#ffbb38] font-semibold mx-auto hover:scale-110 duration-300'>
                        <span className='text-lg mr-1'>Shop Now</span>
                        <MdArrowForwardIos className='text-sm' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;