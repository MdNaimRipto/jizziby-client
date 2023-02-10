import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <ClimbingBoxLoader color="#ffbb38" />
        </div>
    );
};

export default Loader;