import React from 'react';
import TopProducts from '../../Shared/TopProducts';


const Controllers = ({ controllers }) => {
    return (
        <TopProducts active={controllers} />
    )
};

export default Controllers;