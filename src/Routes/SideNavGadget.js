import React, { useEffect, useState } from 'react';
import banner from '../Assets/side-nav/gadget.png'
import ActiveGadget from '../Pages/Home/SideNavGadget/ActiveGadget';
import Deck from '../Pages/Home/SideNavGadget/Deck';
import Drone from '../Pages/Home/SideNavGadget/Drone';
import Earphone from '../Pages/Home/SideNavGadget/Earphone';

const SideNavGadget = () => {
    const [active, setActive] = useState([])
    const [drone, setDrone] = useState([])
    const [deck, setDeck] = useState([])
    const [earphone, setEarphone] = useState([])

    useEffect(() => {
        fetch('https://jizziby-server.vercel.app/drones')
            .then(res => res.json())
            .then(data => {
                setActive(data.slice(0, 3))
                setDrone([])
                setDeck([])
                setEarphone([])
            })
    }, [])

    const handleDrone = () => {
        fetch('https://jizziby-server.vercel.app/drones')
            .then(res => res.json())
            .then(data => {
                setDrone(data.slice(0, 3))
                setActive([])
                setDeck([])
                setEarphone([])
            })
    }

    const handleDeck = () => {
        fetch('https://jizziby-server.vercel.app/decks')
            .then(res => res.json())
            .then(data => {
                setDeck(data.slice(0, 3))
                setActive([])
                setDrone([])
                setEarphone([])
            })
    }

    const handleEarphones = () => {
        fetch('https://jizziby-server.vercel.app/earphones')
            .then(res => res.json())
            .then(data => {
                setEarphone(data.slice(0, 3))
                setActive([])
                setDeck([])
                setDrone([])
            })
    }



    return (
        <div className="drawer drawer-mobile container mx-auto h-[445px] mb-16">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <ActiveGadget active={active} />
                <Drone drones={drone} />
                <Deck decks={deck} />
                <Earphone earphones={earphone} />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[275px] bg-base-100 text-base-content" style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat"
                }}>
                    {/* <!-- Sidebar content here --> */}
                    <li className='disabled text-left text-2xl text-gray-700 font-semibold my-2'>
                        Top Gadgets
                    </li>
                    <li>
                        <button
                            onClick={handleDrone}
                            className='text-gray-600 font-semibold hover:text-gray-700 py-2'>
                            Drones
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleDeck}
                            className='text-gray-600 font-semibold hover:text-gray-700 py-2'>
                            Stream Deck
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleEarphones}
                            className='text-gray-600 font-semibold hover:text-gray-700 py-2'>
                            Earphones
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default SideNavGadget;