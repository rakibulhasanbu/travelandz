'use client'

import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import CheckoutSection from "./CheckoutSection";

export default function MobileCheckout() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div onClick={() => setOpen(prev => !prev)} className='lg:hidden fixed border-t border-t-borderColor shadow-sm bottom-0 left-0 right-0 flex items-center justify-between bg-white px-5 py-4 w-full'>
                <div className=''>
                    <h2 className="text-2xl font-bold text-textDark">$75</h2>
                    <div className='flex items-center gap-1'>
                        <p>Hotel Only</p>
                        <SlArrowUp />
                    </div>
                </div>
                <button className="button" >Checkout</button>
            </div>
            {
                open && <div className={open && 'fixed top-0 left-0 right-0 z-50 bg-black/50 w-full h-full '}>
                    <CheckoutSection open={open} setOpen={setOpen} />
                </div>
            }
        </>
    );
};
