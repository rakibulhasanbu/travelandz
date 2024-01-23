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
        <div className='lg:py-10 flex flex-col-reverse lg:flex-col '>
            {/* this is header part  */}
            <div className='pt-6 lg:pt-0 flex items-start justify-between text-textDark'>
                <div className=''>
                    <h2 className="text-2xl lg:text-3xl font-bold pb-2">Hotel de Mar Gran Meliá</h2>
                    <p className="flex items-start lg:items-center gap-1">
                        <span className="flex items-center gap-1"><FaStar /> 4.3</span>
                        <div className='flex flex-col lg:flex-row'>
                            <span className="flex items-center"><RxDotFilled /> (112 reviews)</span>
                            <span className="flex items-center"><RxDotFilled /> Paseo de las Illetas, 7, Mallorca</span>
                        </div>
                    </p>
                </div>
                <div className='text-primary cursor-pointer hidden lg:flex items-center gap-2'>
                    <LuRefreshCcw className="text-xl" /> <span className="border-b border-b-primary text-gradient">Try Another Hotel</span>
                </div>
            </div>
            {/* this is image section part  */}
            <div className='lg:pt-10 flex items-center lg:gap-6 relative'>
                <div className='-mx-4 lg:-mx-0'>
                    <Image placeholder="blur" src={hotelImage1} width={850} height={420} alt="hotel image" className="lg:rounded-l-xl" />
                </div>
                <div className='hidden lg:flex flex-col gap-6'>
                    <Image placeholder="blur" src={hotelImage2} width={412} height={223} alt="hotel image" className="rounded-tr-xl" />
                    <Image placeholder="blur" src={hotelImage3} width={412} height={223} alt="hotel image" className="rounded-br-xl" />
                </div>
                <div className='absolute right-1 lg:right-6 bottom-3 lg:bottom-6 z-10'>
                    <div className='hidden lg:flex items-center gap-2 bg-white rounded-xl  px-4 py-2  font-semibold text-lg cursor-pointer'>
                        <CgMenuGridO /> <span>Show all photos</span>
                    </div>
                    <div className='lg:hidden rounded-xl px-3 py-2 bg-black/80 text-white text-sm'>
                        1/25
                    </div>
                </div>
            </div>
        </div>
    );
};
