import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import banner from "../../Assets/banner_watch.png"

const BestDeals = () => {
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
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-xl mb-6 flex flex-col items-center justify-center text-white">
                    <h2 className="max-w-lg mt-7 mb-1 font-sans text-xl font-semibold">
                        Best Deals
                    </h2>
                    <p className='text-3xl text-center mb-4'>Get the best Deals on Watches.<br /> Hurry Up</p>
                    <button className='flex items-center border-b border-b-[#ffbb38] font-semibold mx-auto hover:scale-110 duration-300'>
                        <Link to="/smartWatches" className='text-lg mr-1'>Shop Now</Link>
                        <MdArrowForwardIos className='text-sm' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;