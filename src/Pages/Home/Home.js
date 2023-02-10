import React from 'react';
import SideNavGadget from '../../Routes/SideNavGadget';
import SideNavGame from '../../Routes/SideNavGame';
import Banner from './Banner';
import BestDeals from './BestDeals';
import Brands from './Brands';
import FlashSale from './FlashSale';
import NewArrivals from './NewArrivals';
import ProductCategory from './ProductCategory';
import Subscribe from './Subscribe';
import TopSelling from './TopSelling';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductCategory />
            <SideNavGame />
            <FlashSale />
            <Brands />
            <TopSelling />
            <SideNavGadget />
            <BestDeals />
            <NewArrivals />
            <Subscribe />
        </div>
    );
};

export default Home;