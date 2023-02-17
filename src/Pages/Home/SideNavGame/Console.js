import React from 'react';
import TopProducts from '../../Shared/TopProducts';

const Console = ({ consoles }) => {
    return (
        <TopProducts active={consoles} />
    )
};

export default Console;