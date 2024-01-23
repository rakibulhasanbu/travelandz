'use client'

import { FiPlus } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

interface TCheckout {
    open?: boolean,
    setOpen?: any
}

export default function CheckoutSection({ open, setOpen }: TCheckout) {
    return (
        <div className={`${open ? "fixed lg:hidden bottom-0 left-0 right-0 z-50" : "hidden"} lg:block w-full lg:w-4/12 h-fit rounded-2xl space-y-4 bg-white border border-borderColor shadow-md p-6`}>
            <div className='flex items-center justify-between'>
                <h3 className="text-lg font-bold">$25 per night</h3>
                <SlArrowDown onClick={() => setOpen((prev: any) => !prev)} className="lg:hidden" />
            </div>
            <div className='rounded-2xl flex border border-borderColor'>
                <div className='w-1/2 px-4 py-3.5 space-y-2'>
                    <h4 className="font-medium">Check-in</h4>
                    <p className="text-lg">03 June 2023</p>
                </div>
                <div className='w-1/2 px-4 py-3.5 space-y-2 border-l border-l-borderColor p-6'>
                    <h4 className="font-medium">Check-out</h4>
                    <p className="text-lg">06 June 2023</p>
                </div>
            </div>
            <div className='rounded-2xl px-4 py-3.5 flex items-center justify-between border border-borderColor'>
                <div className='space-y-2'>
                    <h4 className="font-medium">Guests</h4>
                    <p className="text-lg">2 adults</p>
                </div>
                <SlArrowDown className="text-2xl text-textDark" />
            </div>
            <div className='rounded-2xl px-4 py-3.5 flex items-center justify-between border border-borderColor'>
                <div className='space-y-2'>
                    <h4 className="font-medium">Room type</h4>
                    <p className="text-lg">Deluxe room</p>
                </div>
                <FiPlus className="text-2xl text-textDark" />
            </div>
            <div className='my-4 flex items-center gap-4 p-1.5 shadow-lg bg-[#F6F6F6] rounded-full'>
                <div className='w-1/2 border border-borderColor bg-white py-2 text-center rounded-full'>
                    Hotel only
                </div>
                <p className="font-medium text-[#8E8E92]">Hotel + Experiences</p>
            </div>

            <div className='flex items-center justify-between'>
                <h4 className="text-textDark text-4xl font-bold">$75</h4>
                <p className="text-[#8E8E92]">Tax will calculate in checkout</p>
            </div>
            <div className='py-4'>
                <button className="button w-full" >Checkout Hotel</button>
            </div>
            <h4 className="text-textDark text-center">Free Cancellation until 2023-06-03</h4>
        </div>
    );
};
