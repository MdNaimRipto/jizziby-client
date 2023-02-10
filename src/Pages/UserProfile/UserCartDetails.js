import React from 'react';

const UserCartDetails = ({ cartInfo, refetch }) => {
    const cartDetails = cartInfo.cart.cart

    return (
        <div className='container mx-auto my-8'>
            <div className="overflow-x-auto w-full">

                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th></th>
                            <th className='text-start'>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cartDetails.map(cartDetail => (
                            <tr key={cartDetail.id}>
                                <th>

                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar mx-auto">
                                            <div className="mask mask-square w-24 h-24">
                                                <img src={cartDetail?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                                <td className='text-start'>
                                    <p>{cartDetail?.name}</p>
                                </td>
                                <td>
                                    <p>{cartDetail?.quantity}</p>
                                </td>
                                <td>
                                    TK.<span>{cartDetail?.price}</span>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default UserCartDetails;