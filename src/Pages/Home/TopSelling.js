import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../ContextProvider/FetchContext';
import Loader from '../Shared/Loader';
import StarRating from '../Shared/StarRating';

const TopSelling = () => {
    const { topSelling, topSellingLoading } = useContext(DataContext)

    if (topSellingLoading) {
        return <Loader />
    }
    return (
        <div className='container mx-auto py-16 overflow-hidden'>
            <div className='flex justify-between items-end mt-2 px-10' data-aos="fade-left">
                <h2 className='text-2xl md:text-3xl font-semibold text-left'>
                    Top Selling Products
                </h2>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 md:mx-12 mt-8' data-aos="fade-right">
                    {
                        topSelling.map(product => (
                            <div className="bg-white rounded-lg shadow-md p-2 md:p-6 lg:flex items-center"
                                key={product._id}>
                                <img className="lg:mr-6 w-[70%] md:w-4/5 lg:w-[40%] mx-auto hover:scale-110 duration-300 cursor-pointer"
                                    src={product.images[0].i} alt="ProductImage" />
                                <div>
                                    <h2 className="text-sm md:text-lg font-medium mb-2">{product.title}</h2>
                                    <p className="text-gray-600 mb-4">
                                        <StarRating rating={product.rating} />
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <h3 className="text-xs md:text-lg font-medium mr-2">TK.{product.price}</h3>
                                        <Link to={`/${product.category}/${product._id}`}
                                            className="bg-primary text-white py-2 px-4 rounded-lg hover:text-black duration-300 text-sm md:text-lg lg:text-sm xl:text-lg"
                                        >View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default TopSelling;