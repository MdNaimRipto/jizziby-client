import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="border-t border-t-gray-200 p-4 ">
            <div className="container mx-auto mt-10  ">
                <div className="md:flex justify-between mt-4 mb-10 items-center">
                    <div className="w-3/5 md:w-2/5 lg:w-1/5">
                        <img src={logo} alt="" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 border-b border-b-gray-300 pb-3">
                    <div>
                        <span className="font-bold mb-3 text-black text-xl">ABOUT US</span>
                        <br />
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300  ">
                            Branding
                        </Link>

                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Design
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Marketing
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Advertisement
                        </Link>
                    </div>
                    <div>
                        <span className="font-bold mb-3 text-black text-xl">ORDERS AND RETURNS </span>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            About us
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Contact
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Jobs
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Press kit
                        </Link>
                    </div>
                    <div>
                        <span className="font-bold mb-3 text-black text-xl">MY ACCOUNT</span>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Terms of use
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Privacy policy
                        </Link>
                        <Link className="link link-hover block mt-2 hover:pl-3 duration-300 ">
                            Cookie policy
                        </Link>
                    </div>
                    <div>
                        {/* <span className="">NEWSLETTER</span> */}
                        <div className="mt-3 md:mt-0 text-base">
                            <h4 className="font-bold mb-3 text-black text-xl uppercase">Our Contact Info</h4>
                            <p className="mb-2">
                                Phone:{" "}
                                <span className="font-semibold text-base md:text-lg">+123-456-789</span>
                            </p>
                            <p>
                                Email:{" "}
                                <span className="font-semibold">demo@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-6 mb-3">
                <p className="mb-3 md:mb-0">CopyrightⒸ Jizziby 2025.</p>
                <div className="flex flex-row-reverse items-center gap-4 mr-5">
                    <div className="flex items-center text-3xl gap-3 md:gap-5">
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcPaypal />
                    </div>
                    <Link href="/" className="text-lg font-semibold">
                        <GrFacebookOption />
                    </Link>
                    <Link href="/" className="text-lg font-semibold">
                        <BsTwitter />
                    </Link>
                    <Link href="/" className="text-lg font-semibold">
                        <AiOutlineInstagram />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;