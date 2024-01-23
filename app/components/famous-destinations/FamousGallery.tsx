import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import hotelImage1 from '../../assets/hotel1.png'
import hotelImage2 from '../../assets/hotel2.png'
import hotelImage3 from '../../assets/hotel3.png'
import { CgMenuGridO } from "react-icons/cg";

export default function FamousGallery() {
    return (
        <div className='py-10'>
            {/* this is header part  */}
            <div className='flex items-start justify-between text-textDark'>
                <div className=''>
                    <h2 className="text-3xl font-bold pb-2">Hotel de Mar Gran Meliá</h2>
                    <p className="flex items-center gap-1">
                        <span className="flex items-center gap-1"><FaStar /> 4.3</span>
                        <span className="flex items-center"><RxDotFilled /> (112 reviews)</span>
                        <span className="flex items-center"><RxDotFilled /> Paseo de las Illetas, 7, Mallorca</span>
                    </p>
                </div>
                <div className='text-primary flex items-center gap-2'>
                    <LuRefreshCcw className="text-xl" /> <span className="border-b border-b-primary text-gradient">Try Another Hotel</span>
                </div>
            </div>
            {/* this is image section part  */}
            <div className='pt-10 flex items-center gap-6 relative'>
                <div className=''>
                    <Image src={hotelImage1} width={850} height={420} alt="hotel image" className="rounded-l-xl" />
                </div>
                <div className='flex flex-col gap-6'>
                    <Image src={hotelImage2} width={412} height={223} alt="hotel image" className="rounded-tr-xl" />
                    <Image src={hotelImage3} width={412} height={223} alt="hotel image" className="rounded-br-xl" />
                </div>
                <div className='absolute right-6 bottom-6 flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-lg cursor-pointer z-10'>
                    <CgMenuGridO /> <span>Show all photos</span>
                </div>
            </div>
        </div>
    );
};
