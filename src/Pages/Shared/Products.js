import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import StarRating from './StarRating';

const Products = ({ allProduct }) => {
    const { title, rating, price, images, category, _id } = allProduct

    return (
        <Link to={`/${category}/${_id}`}>
            <ScrollToTop />
            <div
                className="overflow-hidden transition-shadow duration-300 bg-white hover-container shadow-xl p-4 relative pb-[50px] h-[475px]">
                <div className='mb-4'>
                    <img
                        src={images[0].i}
                        className="object-cover mx-auto rounded hover:scale-110 duration-300 -z-50 h-[300px]"
                        alt=""
                    />
                </div>
                <div>
                    <p className="text-base md:text-lg font-medium mb-2 text-black">{title}</p>
                    <div className='flex justify-between items-center absolute bottom-2 w-full right-0 px-4'>
                        <p className='text-base md:text-xl font-medium mb-2 text-green-500'>
                            <span className='mr-1 text-black'>Price: TK.</span>
                            <span>{price}</span>
                        </p>
                        <p className="mb-2">
                            <StarRating rating={rating} />
                        </p>
                    </div>
                    <button className='hover-effects bg-primary w-[95%] py-3 mx-auto font-bold font-sans text-gray-800 rounded flex items-center justify-center'>
                        <BiShoppingBag className="mr-2 text-xl" />
                        <span>View Details</span>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default Products;