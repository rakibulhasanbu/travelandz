import Image from "next/image";
import eventImage from '../../assets/event.png'
import { MdDelete } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";

export default function EventCard() {
    return (
        <div className='max-w-sm relative rounded-2xl shadow-sm border border-borderColor'>
            <Image placeholder="blur" src={eventImage} width={384} height={140} alt="event image" className="rounded-t-2xl" />

            <div className='p-4'>
                <h2 className="text-lg font-bold text-textDark">Alcudia Bay 50-minutes tour from Alcudia</h2>
                <div className='flex items-center gap-6'>
                    <div className='text-textGrey flex items-center gap-1'>
                        <FaLocationDot />
                        <span>Carrer de la Mareperla</span>
                    </div>
                    <div className='text-textGrey flex items-center gap-1'>
                        <BsPeopleFill />
                        <span>2 pax</span>
                    </div>
                </div>
                <h1 className="text-[24px] font-bold pt-4">USD 344</h1>
            </div>

            <div className='absolute right-2 top-2 z-10 flex items-center justify-center cursor-pointer h-8 w-8 rounded-full bg-[#F20000]'>
                <MdDelete className="text-white" />
            </div>
        </div>
    );
};
