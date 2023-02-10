import React, { useEffect, useState } from 'react';
import img from "../Assets/side-nav/gaming.png"
import Active from '../Pages/Home/SideNavGame/Active';
import Console from '../Pages/Home/SideNavGame/Console';
import Controllers from '../Pages/Home/SideNavGame/Controllers';
import Headsets from '../Pages/Home/SideNavGame/Headsets';


const SideNavGame = () => {
    const [controller, setController] = useState([])
    const [headset, setHeadset] = useState([])
    const [console, setConsole] = useState([])
    const [active, setActive] = useState([])

    useEffect(() => {
        fetch('https://jizziby-server.vercel.app/controllers')
            .then(res => res.json())
            .then(data => {
                setActive(data.slice(0, 3))
                setController([])
                setConsole([])
                setHeadset([])
            })
    }, [])

    const handleController = () => {

        fetch('https://jizziby-server.vercel.app/controllers')
            .then(res => res.json())
            .then(data => {
                setController(data)
                setConsole([])
                setHeadset([])
                setActive([])
            })

    }

    const handleHeadset = () => {

        fetch('https://jizziby-server.vercel.app/headphones')
            .then(res => res.json())
            .then(data => {
                setHeadset(data.slice(0, 3))
                setConsole([])
                setController([])
                setActive([])
            })

    }

    const handleConsole = () => {

        fetch('https://jizziby-server.vercel.app/consoles')
            .then(res => res.json())
            .then(data => {
                setConsole(data.slice(0, 3))
                setHeadset([])
                setController([])
                setActive([])
            })

    }


    return (
        <div className="drawer drawer-mobile container mx-auto h-[445px] mb-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}

                <Active active={active} />
                <Controllers controllers={controller} />
                <Headsets headsets={headset} />
                <Console consoles={console} />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[275px] bg-base-100 text-base-content" style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat"
                }}>
                    {/* <!-- Sidebar content here --> */}
                    <li className='disabled text-left text-2xl text-gray-700 font-semibold my-2'>
                        Top Gaming Gears
                    </li>
                    <li>
                        <button
                            onClick={handleController}
                            className='text-gray-600 font-semibold hover:text-gray-700 py-2'>
                            Controller
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleHeadset}
                            className='text-gray-600 font-semibold hover:text-gray-700 py-2'>
                            Headset
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleConsole}
                            className='text-gray-600 font-semibold hover:text-gray-700 py-2'>
                            Console
                        </button>
                    </li>
                    <li className='disabled text-lg ml-1 text-gray-700 font-semibold underline'>
                        Shop Now
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default SideNavGame;