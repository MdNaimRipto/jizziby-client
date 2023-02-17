import React from 'react';
import TopProducts from '../../Shared/TopProducts';

const Headsets = ({ headsets }) => {
    return (
        <TopProducts active={headsets} />
    )
};

export default Headsets;