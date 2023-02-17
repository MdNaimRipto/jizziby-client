import React from 'react';
import TopProducts from '../../Shared/TopProducts';

const Drone = ({ drones }) => {
    return (
        <TopProducts active={drones} />
    )
};

export default Drone;