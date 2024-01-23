import Image from "next/image";
import dubai from '../../assets/dubai.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function TripSection() {
    return (
        <div className=''>
            <div className='pb-14 flex justify-between items-start'>
                <div className='max-w-5xl'>
                    <h2 className="pb-6 text-4xl font-bold text-textDark">Discover Unique Destinations with AI Trip Itinerary.</h2>
                    <p className="text-[#3C3C43] text-lg">Explore our AIs handpicked selection of the top 10 unique cities and create lifelong vacations memories using AI trip planner. Use Travelandz AI planner to experience local culture and nature in these breathtaking destinations.</p>

                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center bg-primary'>
                        <GoArrowLeft className="text-2xl text-white" />
                    </div>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center border border-primary'>
                        <GoArrowRight className="text-2xl text-primary" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <Image src={dubai} height={510} width={412} alt="Dubai" />
                <Image src={dubai} height={510} width={412} alt="Dubai" />
                <Image src={dubai} height={510} width={412} alt="Dubai" />
            </div>
        </div>
    );
};
