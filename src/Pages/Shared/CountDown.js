import React, { useState, useEffect } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date("Feb 21, 2023 15:37:25").getTime();

        // Update the count down every 1 second
        const intervalId = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update the state with the new time left
            setTimeLeft({ days, hours, minutes, seconds });

            // If the count down is finished, clear the interval
            if (distance < 0) {
                clearInterval(intervalId);
                setTimeLeft('EXPIRED');
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (!timeLeft) {
        return <div>Loading...</div>;
    }
    if (timeLeft === 'EXPIRED') return <div>EXPIRED</div>

    return (
        <div className='mb-6'>
            <div className='text-2xl md:text-3xl flex font-semibold'>
                <div className='flex flex-col items-center mr-6'>
                    <span className='text-red-500 mr-2'>
                        {timeLeft.days}
                    </span>
                    <span>days</span>
                </div>
                <div className='flex flex-col items-center mr-6'>
                    <span className='text-sky-500 mr-2'>
                        {timeLeft.hours}
                    </span>
                    <span>hours</span>
                </div>
                <div className='flex flex-col items-center mr-6'>
                    <span className='text-green-500 mr-2'>
                        {timeLeft.minutes}
                    </span>
                    <span>minutes</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-pink-500 mr-2'>
                        {timeLeft.seconds}
                    </span>
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );
}

export default Countdown;