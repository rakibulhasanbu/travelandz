import Image from "next/image";
import dubai from '../../assets/dubai.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function TripSection() {
    return (
        <div className=' px-4 lg:px-0'>
            <div className='pb-14 flex justify-between items-start'>
                <div className='w-full lg:max-w-5xl'>
                    <h2 className="pb-6 text-2xl lg:text-4xl font-bold text-textDark">Discover Unique Destinations with AI Trip Itinerary.</h2>
                    <p className="text-[#3C3C43] lg:text-lg">Explore our AIs handpicked selection of the top 10 unique cities and create lifelong vacations memories using AI trip planner. Use Travelandz AI planner to experience local culture and nature in these breathtaking destinations.</p>

                </div>
                <div className='hidden lg:flex items-center gap-4'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center bg-primary'>
                        <GoArrowLeft className="text-2xl text-white" />
                    </div>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center border border-primary'>
                        <GoArrowRight className="text-2xl text-primary" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <Image placeholder="blur" src={dubai} height={510} width={412} alt="Dubai" />
                <Image placeholder="blur" src={dubai} height={510} width={412} alt="Dubai" />
                <Image placeholder="blur" src={dubai} height={510} width={412} alt="Dubai" />
            </div>
        </div>
    );
};
