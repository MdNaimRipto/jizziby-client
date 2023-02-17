import React from 'react';
import TopProducts from '../../Shared/TopProducts';

const Earphone = ({ earphones }) => {
    return (
        <TopProducts active={earphones} />
    )
};

export default Earphone;