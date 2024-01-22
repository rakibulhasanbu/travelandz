import Image from "next/image";
import logo from '../../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className='container mx-auto flex items-center justify-between py-6'>
            <Link href={'/'}>
                <Image src={logo} width={170} height={35} alt="logo" />
            </Link>
            <div className='flex items-center gap-8 font-medium'>
                <p className="cursor-pointer">About Travelandz</p>
                <p className="cursor-pointer">Famous destinations</p>
                <p className="cursor-pointer">Contact us</p>
            </div>
            <div className='w-11 h-11 rounded-full border shadow bg-white flex items-center justify-center'>
                <FaRegUser />
            </div>
        </div>
    );
};
