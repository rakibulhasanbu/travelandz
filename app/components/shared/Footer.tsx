import Image from "next/image";
import footerLogo from '../../assets/footer-logo.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function Footer() {
    return (
        <div className='w-full bg-darkish/10'>
            <div className=' container mx-auto text-center flex flex-col gap-7 items-center justify-center py-14'>
                <Image placeholder="blur" src={footerLogo} width={170} height={35} alt="footer logo" />
                {/* this is social icon sections  */}
                <div className='flex items-center gap-7'>
                    <FaFacebookF className="text-[#5F5F60] text-lg cursor-pointer" />
                    <FaLinkedinIn className="text-[#5F5F60] text-lg cursor-pointer" />
                    <FaTwitter className="text-[#5F5F60] text-lg cursor-pointer" />
                    <BiLogoInstagramAlt className="text-[#5F5F60] text-lg cursor-pointer" />
                </div>
                <p className="text-[#5F5F60] font-medium">© 2023, made with by Travelandz</p>
            </div>
        </div>
    );
};
