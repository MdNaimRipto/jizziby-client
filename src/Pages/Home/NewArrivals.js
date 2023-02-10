import React, { useContext } from 'react';
import { DataContext } from '../../ContextProvider/FetchContext';
import AllProductsContainer from '../Shared/AllProductsContainer';
import Loader from '../Shared/Loader';

const NewArrivals = () => {
    const { allProducts, allProductsLoading } = useContext(DataContext)
    const products = allProducts.slice(0, 9)

    if (allProductsLoading) {
        return <Loader />
    }
    return (
        <div className='container mx-auto py-16 overflow-hidden'>
            <h2
                className='text-3xl font-semibold text-left pb-8'
                data-aos="fade-left"
            >New Arrival Products
            </h2>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-12'>
                {
                    products.map(product => <AllProductsContainer allProduct={product} />)
                }
            </div>
        </div>
    );
};

export default NewArrivals;