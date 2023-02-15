import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import Loader from "../Shared/Loader"
import UserCartDetails from './UserCartDetails';
import noProfile from "../../Assets/noProfile.jpg"

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    const { data: cartInfo = [], isLoading: cartDetailsLoading, refetch } = useQuery({
        queryKey: ['cartDetails'],
        queryFn: async () => {
            const res = await fetch(`https://jizziby-server.vercel.app/cart?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })
    const cartDetails = cartInfo

    if (cartDetailsLoading) {
        return <Loader />
    }
    console.log(cartDetails);
    return (
        <div className='container mx-auto'>
            <div className='flex gap-6 items-center py-12 border-b border-b-gray-200'>
                <div className='ml-2 lg:ml-0 w-24 h-24'>
                    <img
                        src={user?.photoURL ? user?.photoURL : noProfile}
                        alt="" referrerPolicy='no-referrer'
                        className='rounded-full'
                    />
                </div>
                <div>
                    <h2 className='text-xl md:text-3xl font-semibold mb-2'>{user?.displayName}</h2>
                    <p>{user?.email}</p>
                </div>
            </div>
            <div>
                <h2 className='text-xl md:text-3xl font-semibold pt-8 pb-3 text-center'>Recently Saved Products</h2>
                {
                    cartDetails.map(cartInfo =>
                        <UserCartDetails
                            key={cartInfo._id}
                            cartInfo={cartInfo}
                            refetch={refetch}
                        />)
                }
            </div>
        </div>
    );
};

export default UserProfile;