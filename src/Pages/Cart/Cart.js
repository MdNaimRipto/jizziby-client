import React, { useContext } from 'react';
import { UserCartContext } from '../../ContextProvider/CartProvider';
import { MdDeleteOutline } from "react-icons/md"
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice, shippingFee } = UserCartContext()
    const { user } = useContext(AuthContext)
    const cartDetails = cart

    const cartItem = {
        email: user?.email,
        cart: cartDetails
    }

    const confirmPurchase = (email) => {
        fetch(`http://localhost:5000/cart/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log(data)
                    toast.success("Successfully Saved Items")
                    clearCart()
                }
            })
    }

    return (
        <div className='container mx-auto my-8'>
            <div className="overflow-x-auto w-full">
                {
                    cartDetails.length ?
                        <table className="table w-full text-center">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Image</th>
                                    <th></th>
                                    <th className='text-start'>Product Name</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                    <th>Delete Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
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
                                        <th>
                                            <button
                                                onClick={() => { removeItem(cartDetail.id) }}
                                                className="btn bg-red-400 text-white btn-md btn-circle">
                                                <MdDeleteOutline className='text-2xl' />
                                            </button>
                                        </th>
                                    </tr>
                                ))
                                }
                            </tbody>
                            {/* <!-- foot --> */}
                            {/* <div className='h-[50vh]'>

                    </div> */}
                        </table>
                        :
                        <div className='flex justify-center items-center h-[60vh]'>
                            <h2 className='text-3xl'>No Item In Cart</h2>
                        </div>
                }
                <div className='flex flex-col md:flex-row-reverse justify-between items-center border-t border-t-gray-200 rounded-xl mt-[180px]'>
                    <div className='flex justify-end mt-4'>
                        <div className='p-5'>
                            <p className='flex justify-between items-center mb-2'>
                                <span className='font-semibold mr-5'>Total Price:</span>
                                <span>{totalPrice}</span>
                            </p>
                            <p className='flex justify-between items-center pb-2 border-b border-b-gray-400'>
                                <span className='font-semibold mr-5'>Delivery Charge:</span>
                                <span>{shippingFee}</span>
                            </p>
                            <p className='flex justify-between items-center pt-2'>
                                <span className='font-semibold mr-5'>Price With Charge:</span>
                                <span>{totalPrice + shippingFee}</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-end pl-5'>
                        <button
                            disabled={!cartDetails?.length}
                            className='btn bg-red-400 text-white btn-md mr-2' onClick={clearCart}>
                            Clear Cart
                        </button>
                        <button
                            onClick={() => { confirmPurchase(user?.email) }}
                            disabled={!user?.uid || !cartDetails?.length} className='btn bg-yellow-500 text-black btn-md hover:bg-yellow-500'>
                            Save Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;