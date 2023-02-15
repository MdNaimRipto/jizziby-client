import React from 'react';

const Subscribe = () => {
    return (
        <section
            className="container mb-12 py-16 rounded text-center bg-info text-gray-900 mx-auto"
            data-aos="fade-up"
        >
            <h4 className="font-bold mb-3 text-xl md:text-2xl leading-9">
                LET'S STAY IN TOUCH
                <br />
                FOR BEST DEALS
            </h4>
            <p className="text-sm md:text-base font-semibold mb-4">Get latest update and offers from Jizziby</p>
            <div className="form-control mx-auto">
                <label className="input-group justify-center">
                    <input type="text" placeholder="demo@gmail.com" className="input input-bordered" />
                    <button type='submit' className='btn btn-primary text-white hover:text-black duration-300 w-1/4 md:w-[12%] text-xs md:text-base'>Subscribe</button>
                </label>
            </div>
        </section>
    );
};

export default Subscribe;