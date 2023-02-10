import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper"

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('Brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className='overflow-hidden hidden lg:block container mx-auto mt-12'>
            <div className="mx-auto mb-2 mt-3 sm:text-center" data-aos="fade-left">
                <h2 className='text-3xl font-semibold text-start pl-10 mb-8'>
                    Top Brand's
                </h2>
            </div>

            <Swiper
                slidesPerView={5}
                spaceBetween={80}
                loop={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper w-[80%]"
                data-aos="fade-right"
            >
                {
                    brands.map(brand => (

                        <SwiperSlide key={brand.id}>
                            < img src={brand.img} alt="" className='w-[100%]' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    );
};

export default Brands;