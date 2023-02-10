import React from 'react';

const Favorite = () => {
    return (
        <div className='h-screen container mx-auto my-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th></th>
                            <th className='text-start'>Product Name</th>
                            <th>Product Price</th>
                            <th>Delete Product</th>
                            <th>Add Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar mx-auto">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src="https://i.ibb.co/M7xpTnW/midnight-forces-ii-500x500.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td className='text-start'>
                                <p>Xbox Midnight Forces II Special Edition Wireless Controller</p>
                            </td>
                            <td>
                                TK.<span>1170</span>
                            </td>
                            <td>
                                <button className="btn bg-red-600 text-white btn-sm">Delete</button>
                            </td>
                            <td>
                                <button className="btn bg-black text-white btn-sm">Add To Cart</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Favorite;