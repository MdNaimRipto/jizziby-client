import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import banner_1 from "../../Assets/banner/banner_1.png";
import banner_2 from "../../Assets/banner/banner_2.png";
import banner_3 from "../../Assets/banner/banner_3.png";
import gadget from "../../Assets/banner/gadget.png";
import gaming from "../../Assets/banner/gaming.png";
import { MdArrowForwardIos } from "react-icons/md"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Banner = () => {
    return (
        <div className='container my-8 mx-auto grid grid-cols-1 xl:grid-cols-4'>
            <div className='col-span-3 bg-[#ffeae5] mr-0 xl:mr-10'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col-reverse
                            lg:grid gap-5 lg:row-gap-8 lg:grid-cols-2">
                                <div className="flex flex-col justify-center ">
                                    <div className="max-w-xl mb-6">
                                        <div className="badge bg-white text-black border-0 mb-3">
                                            New Released
                                        </div>
                                        <h4 className='max-w-lg mb-3 font-sans text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
                                            Xiaomi Mi Series
                                        </h4>
                                        <h2 className="max-w-lg mb-6 font-sans font-bold tracking-tight text-gray-900 sm:leading-none text-[32px] md:text-7xl lg:text-6xl">
                                            Xiaomi Mi P1
                                        </h2>
                                        <button className='flex items-center border-b border-b-[#ffbb38] font-semibold'>
                                            <span className='text-lg mr-1'>Buy Now</span>
                                            <MdArrowForwardIos className='text-sm' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="object-cover w-full"
                                        src={banner_1}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col-reverse
                            lg:grid gap-5 lg:row-gap-8 lg:grid-cols-2">
                                <div className="flex flex-col justify-center pl-2 md:pl-8">
                                    <div className="max-w-xl mb-6">
                                        <div className="badge bg-white text-black border-0 mb-3">
                                            New Released
                                        </div>
                                        <h4 className='max-w-lg mb-3 font-sans text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
                                            Razer Blade Series
                                        </h4>
                                        <h2 className="max-w-lg mb-6 font-sans text-[32px] md:text-7xl lg:text-5xl font-bold tracking-tight text-gray-900">
                                            Razer Blade 15
                                        </h2>
                                        <button className='flex items-center border-b border-b-[#ffbb38] font-semibold'>
                                            <span className='text-lg mr-1'>Buy Now</span>
                                            <MdArrowForwardIos className='text-sm' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="object-cover w-full"
                                        src={banner_2}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col-reverse
                            lg:grid gap-5 lg:row-gap-8 lg:grid-cols-2">
                                <div className="flex flex-col justify-center pl-2 md:pl-8">
                                    <div className="max-w-xl mb-6">
                                        <div className="badge bg-white text-black border-0 mb-3">
                                            New Released
                                        </div>
                                        <h4 className='max-w-lg mb-3 font-sans text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
                                            Samsung S Series
                                        </h4>
                                        <h2 className="max-w-lg mb-6 font-sans text-[32px] md:text-7xl lg:text-5xl font-bold tracking-tight text-gray-900">
                                            Samsung S10+
                                        </h2>
                                        <button className='flex items-center border-b border-b-[#ffbb38] font-semibold'>
                                            <span className='text-lg mr-1'>Buy Now</span>
                                            <MdArrowForwardIos className='text-sm' />
                                        </button>
                                    </div>
                                </div>
                                <div className='mb-8 lg:mb-0'>
                                    <img
                                        className="object-cover w-full"
                                        src={banner_3}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='col-span-1 hidden xl:block'>
                <div className='flex xl:flex-col-reverse gap-10'>
                    <div className='bg-[#d3efff]'>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                                <div className="flex flex-col justify-center">
                                    <div className="max-w-xl mb-6">
                                        <div className="badge bg-white text-black border-0 mb-3 font-semibold">
                                            Gadgets
                                        </div>
                                        <h4 className='mb-3 font-sans tracking-tight text-gray-900 text-[25px] leading-[35px] font-bold'>
                                            Mi Smart <br />
                                            Watch
                                        </h4>
                                        <button className='flex items-center text-gray-900 font-bold'>
                                            <span className='text-base mr-1'>Buy Now</span>
                                            <MdArrowForwardIos className='text-sm' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="w-full"
                                        src={gadget}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#e5eaee]'>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                                <div className="flex flex-col justify-center">
                                    <div className="max-w-xl mb-6">
                                        <div className="badge bg-warning text-black border-0 mb-3 font-semibold">
                                            Gaming
                                        </div>
                                        <h4 className='mb-3 font-sans tracking-tight text-gray-900 text-[25px] leading-[34px] font-bold'>
                                            Xbox 360 <br />
                                            Console
                                        </h4>
                                        <button className='flex items-center text-gray-900 font-bold'>
                                            <span className='text-base mr-1'>Buy Now</span>
                                            <MdArrowForwardIos className='text-sm' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="w-full"
                                        src={gaming}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;