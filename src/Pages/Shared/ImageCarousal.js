import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
const ImageCarousal = ({ images }) => {

    return (
        <>
            <div className='w-full'>
                <Swiper

                    style={{
                        "--swiper-navigation-color": "#ddd",
                        "--swiper-pagination-color": "#ddd",
                    }}
                    loop={true}
                    spaceBetween={10}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="h-[350px] md:h-[400px] w-[300px] md:w-[400px]"
                >
                    {
                        images?.map(ss =>
                            <SwiperSlide key={ss.id}>
                                {/* <PhotoProvider>
                                    <PhotoView src={ss.img}> */}
                                <img
                                    className="object-cover w-full rounded shadow-lg"
                                    src={ss.i}
                                    alt=""
                                />
                                {/* </PhotoView>
                                </PhotoProvider> */}
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>
    );
};

export default ImageCarousal;