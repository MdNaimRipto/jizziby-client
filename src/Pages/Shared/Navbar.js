import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { BsPerson, BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { UserCartContext } from '../../ContextProvider/CartProvider';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';

const Navbar = () => {
    const searchItem = useRef()
    const [searchedItem, setSearchedItem] = useState([])
    const [visible, setVisible] = useState(false)
    const { cart } = UserCartContext()
    const { logout, user } = useContext(AuthContext)

    let invisibleStyle = "invisible"

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchedItem(searchItem.current.value)
        setVisible(true)
    }

    const { data: items = [], isLoading } = useQuery({
        queryKey: ['searchedItem', searchedItem],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/searchedItem?search=${searchedItem}`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loader />
    }

    const menuBar = <>
        <li tabIndex={0}>
            <p className='nav-title'>
                Components
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </p>
            <ul>
                <div className='mega-menu grid grid-cols-1 lg:grid-cols-3 px-0 lg:px-10 lg:py-5 pt-0'>
                    <div className='sub-menu'>
                        <li><Link>Processor</Link></li>
                        <li><Link>CPU Cooler</Link></li>
                        <li><Link>Liquid/ Water Cooler</Link></li>
                        <li><Link>Motherboard</Link></li>
                        <li><Link to="/gpus">Graphics Card</Link></li>
                    </div>
                    <div className='sub-menu'>
                        <li><Link>Ram</Link></li>
                        <li><Link>Power Supply</Link></li>
                        <li><Link>Hard Disk</Link></li>
                        <li><Link>SSD</Link></li>
                        <li><Link>Portable HDD & SSD</Link></li>
                    </div>
                    <div className='sub-menu'>
                        <li><Link>Casing</Link></li>
                        <li><Link>Casing Fan</Link></li>
                        <li><Link>Graphics Card Holder</Link></li>
                    </div>
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <p className='nav-title'>
                Accessories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </p>
            <ul>
                <div className='accessories-menu grid grid-cols-1 lg:grid-cols-3 px-0 lg:px-10 lg:py-5 pt-0'>
                    <div className='sub-menu'>
                        <li><Link>Monitor</Link></li>
                        <li><Link>Keyboard</Link></li>
                        <li><Link>Mouse</Link></li>
                        <li><Link>Mouse Pad</Link></li>
                        <li><Link to="/speakers">Speaker</Link></li>
                    </div>
                    <div className='sub-menu'>
                        <li><Link to="/headphones">Headphone</Link></li>
                        <li><Link>Microphone</Link></li>
                        <li><Link>Webcam</Link></li>
                        <li><Link>Headphone Stand</Link></li>
                        <li><Link>Thermal Paste</Link></li>
                    </div>
                    <div className='sub-menu'>
                        <li><Link>Led Stripe</Link></li>
                        <li><Link>Memory Card</Link></li>
                        <li><Link>Sound Card</Link></li>
                    </div>
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <Link to="/phones" className='nav-title'>
                Smart-Phones
            </Link>
        </li>
        <li tabIndex={0}>
            <p className='nav-title'>
                Laptops
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </p>
            <ul>
                <div className='small-menu'>
                    <li><Link to="/laptop">All Laptops</Link></li>
                    <li><Link to="/laptopsBattery">Laptops Battery</Link></li>
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <p className='nav-title'>
                Gadgets
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </p>
            <ul>
                <div className='small-menu'>
                    <li><Link to="/earphones">Earphones</Link></li>
                    <li><Link to="/speakers">Speakers</Link></li>
                    <li><Link to="/smartWatches">Smart Watch</Link></li>
                    <li><Link to="/drones">Drones</Link></li>
                    <li><Link to="/decks">Stream Decks</Link></li>
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <p className='nav-title'>
                Gaming
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </p>
            <ul>
                <div className='small-menu'>
                    <li><Link to="/consoles">Gaming Console</Link></li>
                    <li><Link to="/controllers">Controllers</Link></li>
                    <li><Link to="/headphones">Gaming Headsets</Link></li>
                </div>
            </ul>
        </li>
        <li><Link className='nav-title' to="/televisions">Smart TV</Link></li>
    </>
    const searchBar =
        <div className="form-control w-full">
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered w-full"
                    ref={searchItem}
                />
                <button
                    className="btn btn-square btn-primary"
                    onClick={handleSearch}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>

    return (
        <>
            <nav className='py-3 relative'>
                <div className="navbar bg-base-100 container mx-auto">
                    <div className="navbar-start flex-row-reverse justify-between w-full">
                        <div className="dropdown dropdown-end">
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 w-52 md:w-[550px] bg-transparent">
                                {searchBar}
                                {/* Demo searchbar for small device */}
                            </ul>
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <BiSearchAlt className='text-xl cursor-pointer font-semibold' />
                            </label>
                        </div>
                        <Link to="/" className='w-[40%] px-[5px] py-[12px]'><img src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex w-[65%]">
                        <ul className="menu menu-horizontal px-1 w-[75%]">
                            {searchBar}
                            <div className={visible === false
                                ? invisibleStyle
                                : `visibleStyle`
                            }>
                                {
                                    items.length ?
                                        <>
                                            <div>
                                                {
                                                    items.slice(0, 5).map(item =>
                                                        <Link to={`/allProducts/${item._id}`} key={item._id}>
                                                            <li className='flex items-center flex-nowrap'>
                                                                <div className='w-20 h-20 hover:bg-transparent'>
                                                                    <img src={item.images[0].i} alt="" />
                                                                </div>
                                                                <div className='flex flex-col items-start text-sm hover:bg-transparent'>
                                                                    <h2 className='hover:text-primary hover:text-underline'>{item.title}</h2>
                                                                    <p>Price:{' '}
                                                                        TK.<span className='text-green-500'>{item.price}</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                    )
                                                }
                                                <p
                                                    className='text-center text-base py-3 cursor-pointer text-red-500'
                                                    onClick={() => { setVisible(false) }}>
                                                    Close Search Tab
                                                </p>
                                            </div>
                                        </>
                                        : <div>
                                            <p className='text-center text-base py-5'>0 Items Found</p>
                                            <p
                                                className='text-center text-base py-3 cursor-pointer text-red-500'
                                                onClick={() => { setVisible(false) }}>
                                                Close Search Tab
                                            </p>
                                        </div>
                                }
                            </div>
                        </ul>
                    </div>
                    <div className='text-2xl'>
                        <Link to="/favorite" className='relative'>
                            <p className='absolute top-[-10px] right-0 btn btn-disabled btn-xs btn-circle border-0 bg-yellow-400 text-[13px] text-black'>
                                0
                            </p>
                            <MdFavoriteBorder
                                className='text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500' />
                        </Link>
                        <Link to="/cart" className='mx-[5px]'>
                            <div className='relative'>
                                <p className='absolute top-[-10px] right-0 btn btn-disabled btn-xs btn-circle border-0 bg-yellow-400 text-[13px] text-black'>
                                    {cart?.length}
                                </p>
                                <BsCart3
                                    className='text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500' />
                            </div>
                        </Link>
                        <Link to="/userProfile">
                            <BsPerson
                                className='text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500' />
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className={visible === true ? 'nav-menu-invisible' : 'nav-menu-visible'}>
                <div className="navbar container mx-auto rounded-b-md">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 w-52">
                                {menuBar}
                            </ul>
                        </div>

                    </div>
                    <div className="font-semibold hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuBar}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            !user?.uid ?
                                <Link to="/login" className='btn bg-[#000] border-0 text-white hover:bg-[#000]'>
                                    Login Now
                                </Link>
                                :
                                <button onClick={logout} className='btn bg-[#000] border-0 text-white hover:bg-[#000]'>
                                    Logout
                                </button>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;