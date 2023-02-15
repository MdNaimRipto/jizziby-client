import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="py-16 mx-auto container lg:py-20 px-4"
            style={{ overflow: "hidden" }}
        >
            <div className="mx-auto mb-10 sm:text-center" data-aos="fade-left">
                <h2 className='text-2xl md:text-3xl font-semibold text-center mb-4'>
                    Products Category
                </h2>
                <p className='font-semibold text-center text-sm md:text-base'>Get Your Desired Product from Products Category!</p>
            </div>
            <div className="grid gap-8 mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-5" data-aos="fade-right">

                {
                    categories.map(category => (
                        <Link to={`/${category.category}`} key={category.id} className="flex flex-col items-center p-3 card-style hover:bg-[#ffbb38] duration-500">
                            <img
                                className="object-cover mb-2"
                                src={category.img}
                                alt=""
                            />
                            <p className="text-sm text-gray-800 font-semibold">
                                {category.title}
                            </p>
                        </Link>
                    ))

                }

            </div>
        </div>
    );
};

export default ProductCategory;