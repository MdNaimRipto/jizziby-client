import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const TopProducts = ({ active }) => {
    if (active.length) {
        return (
            <div className='overflow-scroll lg:overflow-hidden'>
                <div className="4 mx-auto container" data-aos="fade-left">
                    <div className='flex justify-between items-end mt-2 mb-5'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left mb-2 md:mb-0'>
                            All Top Gaming Gears
                        </h2>
                        <Link to="/controllers" className='text-base hidden lg:block hover:text-lg hover:text-primary duration-300 font-semibold border-b border-b-primary mr-3 xl-mr-0'>
                            View All
                        </Link>
                    </div>
                    <div className='flex justify-between items-end mt-2'>
                        <label htmlFor="my-drawer-2" className="flex items-center border-b border-b-[#ffbb38] font-semibold text-left drawer-button lg:hidden w-2/5 md:w-1/5">
                            View List
                            <MdArrowForwardIos className='text-sm' />
                        </label>
                        <Link to="/controllers" className='text-base block lg:hidden hover:text-lg hover:text-primary duration-300 font-semibold border-b border-b-primary'>
                            View All
                        </Link>
                    </div>
                    <div className="grid gap-[10px] xl:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            active.map(product => (
                                <Link key={product._id} to={`/${product.category}/${product._id}`} className="mx-auto">
                                    <div
                                        className="overflow-hidden transition-shadow duration-300 bg-white hover-container w-[240px]">
                                        <div className='w-full mx-auto'>
                                            <img
                                                src={product.images[0].i}
                                                className="object-cover mx-auto rounded h-56 lg:h-48 xl:h-56 hover:scale-105 duration-300 -z-50 mb-3"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <p className="mb-2 z-50">
                                                <StarRating rating={product.rating} />
                                            </p>
                                            <p className="text-base font-medium mb-2 text-black">
                                                {product.title}
                                            </p>
                                            <p className='text-xl font-medium mb-2 text-green-500'>
                                                <span className='mr-1 text-black'>Price:</span>
                                                <span>TK.{product.price}</span>
                                            </p>
                                            <button className='hover-effects bg-primary w-[95%] py-3 mx-auto font-bold font-sans text-gray-800 rounded flex items-center justify-center'>
                                                <BiShoppingBag className="mr-2 text-xl" />
                                                <span>View Details</span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div >
        );
    }
};

export default TopProducts;