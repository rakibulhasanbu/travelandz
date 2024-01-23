'use client'

import Image from "next/image";
import logo from '../../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className='border-b border-b-borderColor shadow-sm'>
            <div className='container mx-auto flex items-center justify-between px-4 lg:px-0 py-6'>
                <Link href={'/'}>
                    <Image src={logo} width={170} height={35} alt="logo" className="w-[123px] lg:w-44 h-6 lg:h-9 object-contain" />
                </Link>
                <div className='hidden lg:flex items-center gap-8 font-medium'>
                    <p className="cursor-pointer">About Travelandz</p>
                    <Link href={'/famous-destinations'}>Famous destinations</Link>
                    <Link href={'/#contact'} className="cursor-pointer">Contact us</Link>
                </div>
                <div className='hidden lg:flex items-center justify-center w-11 h-11 rounded-full border shadow bg-white'>
                    <FaRegUser />
                </div>
                <div className='lg:hidden text-xl'>
                    <FiMenu onClick={() => setOpen(prev => !prev)} />
                </div>
                {
                    open && <div className='lg:hidden fixed space-y-1.5 z-50 right-2 rounded-lg top-11 p-4 shadow bg-white'>
                        <p onClick={() => setOpen(prev => !prev)} className="cursor-pointer">About Travelandz</p>
                        <p onClick={() => setOpen(prev => !prev)}>
                            <Link href={'/famous-destinations'}>Famous destinations</Link>
                        </p>
                        <p onClick={() => setOpen(prev => !prev)} className="cursor-pointer">
                            <Link href={'/#contact'} >Contact us</Link>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};
